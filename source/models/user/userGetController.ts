import { userRepository } from "../../repositories/userRepository/userRepository";
import * as errors from "../errors/kjgBackendError";

export module userGetController {

    export async function getUserByName(req, res) {
        let userName = req.params.userName

        if (!userName) {
            throw errors.UnprocessableEntity("Mandatory value missing. Please provide an userName")
        }

        let user = await userRepository.getPopulatedUserByID(userName)
        if (!user) {
            user = await userRepository.createNewUser(userName)

            if (!user) {
                throw errors.InternalError(new Error("User could not be created"), "User could not be created")
            }
        }

        res.status(200).json(user)
    }

    export async function getMilesOfUser(req, res) {
        let userName = req.params.userName

        if (!userName) {
            throw errors.UnprocessableEntity("Mandatory value missing. Please provide an userName")
        }

        let user = await userRepository.getPopulatedUserByID(userName)
        if (!user) {
            user = await userRepository.createNewUser(userName)

            if (!user) {
                throw errors.InternalError(new Error("User could not be created"), "User could not be created")
            }
        }

        res.status(200).json(user?.miles)
    }


}