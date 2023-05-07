import { milesRepository } from "../../repositories/milesRepository";
import { userRepository } from "../../repositories/userRepository/userRepository";
import * as errors from "../errors/kjgBackendError";

export module milesPostController {

    export async function createTransaction(req, res) {
        let userName = req.params.userName;

        if(!userName) {
            throw errors.UnprocessableEntity("Mandatory value missing")
        }

        if (!req.body.miles || !req.body.description) {
            throw errors.UnprocessableEntity("Mandatory values missing, cannot create transaction. Please provide a miles count and a description")
        }

        let user = await userRepository.getPopulatedUserByID(userName)
        if (!user) {
            user = await userRepository.createNewUser(userName)

            if (!user) {
                throw errors.InternalError(new Error("User could not be created"), "User could not be created")
            }
        }

        let newTransaction = await milesRepository.createNewTransaction(req.body.miles, req.body.description)
        if (!newTransaction) {
            throw errors.InternalError(new Error("Transaction could not be created"), "Transaction could not be created")
        }

        let success = await userRepository.addMilesTransaction(user, newTransaction._id)
        if (!success) {
            throw errors.InternalError(new Error("Transaction could not be added to user"), "Transaction could not be added to user")
        }

        res.status(201).json(newTransaction)
        
    }

}