import { gameRepository } from "../../repositories/gameRepository/gameRepository";

export module gamesGetController {

    export async function getGames(req, res) {
        let games = await gameRepository.getGames(req.query.reviewed, req.query.twoAMGame)
        res.status(200).json(games)
    }

}