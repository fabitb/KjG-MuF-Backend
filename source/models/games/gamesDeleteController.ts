import { gameRepository } from "../../repositories/gameRepository/gameRepository";
import { verifyToken } from "../../server";
import * as errors from "../errors/kjgBackendError";

export module gamesDeleteController {

    export async function deleteGameByID(req, res) {

        if (!verifyToken(req.query.apiToken)) {
            throw errors.InvalidApiToken()
        }

        if (!req.params.gameID) {
            throw errors.UnprocessableEntity("Mandatory value missing, cannot delete game. Please provide a gameID")
        }

        if (!await gameRepository.deleteGameByID(req.params.gameID)) throw errors.InternalError(new Error("Could not delete game"), "Could not delete game")

        res.status(200).json()
    }

}