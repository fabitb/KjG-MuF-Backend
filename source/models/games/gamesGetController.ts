import { error } from "console";
import { gameRepository } from "../../repositories/gameRepository/gameRepository";
import * as errors from "../errors/kjgBackendError";
import { verifyToken } from "../../server";

export module gamesGetController {

    export async function getGames(req, res) {

        if (req.query.reviewed === "false" && !verifyToken(req.query.apiToken)) {
            throw errors.InvalidApiToken()
        }

        let games = await gameRepository.getGames(req.query.reviewed, req.query.twoAMGame)
        res.status(200).json(games)
    }

}