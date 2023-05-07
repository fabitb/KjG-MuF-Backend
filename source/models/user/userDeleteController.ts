import { userRepository } from "../../repositories/userRepository/userRepository";
import * as errors from "../errors/kjgBackendError";
import { User } from "./userSchema";

export module userDeleteController {
    
    export async function deleteUser(req, res) {

        if(!req.params.userID) {
            throw errors.UnprocessableEntity("Mandatory value missing, cannot delete user. Please provide an userID")
        } 

        let user = await userRepository.getPopulatedUserByID(req.params.userID)
        if(!user) {
            throw errors.NotFound(User.name, "USer could not be found")
        }

        if(!await userRepository.deleteUserByID(user)) throw errors.InternalError(new Error("Could not delete user"), "Could not delete user")
    
        res.status(200).json()
    }

}