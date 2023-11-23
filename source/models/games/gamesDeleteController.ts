import { gameRepository } from "../../repositories/gameRepository/gameRepository";
import * as errors from "../errors/kjgBackendError";

export module gamesDeleteController {

    export async function deleteGameByID(req, res) {

        if (!req.params.gameID) {
            throw errors.UnprocessableEntity("Mandatory value missing, cannot delete game. Please provide a gameID")
        }

        if (!await gameRepository.deleteGameByID(req.params.gameID)) throw errors.InternalError(new Error("Could not delete game"), "Could not delete game")

        res.status(200).json()
    }

}