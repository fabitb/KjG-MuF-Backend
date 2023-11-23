import { gameRepository } from "../../repositories/gameRepository/gameRepository";
import * as errors from "../errors/kjgBackendError";

export module gamesPostController {

    export async function createGame(req, res) {

        if (!req.body.title || !req.body.hasOwnProperty('actionScore') || !req.body.hasOwnProperty('cognitiveScore') || !req.body.numberOfPlayer || !req.body.duration || !req.body.author) {
            throw errors.UnprocessableEntity("Mandatory values missing, cannot create game.")
        }

        let newGame = await gameRepository.createNewGame(
            req.body.title,
            req.body.actionScore,
            req.body.cognitiveScore,
            req.body.numberOfPlayer,
            req.body.duration,
            req.body.ageLimitations,
            req.body.spaceLimitations,
            req.body.materials,
            req.body.goalOfGame,
            req.body.preparationsInstructions,
            req.body.gameplayInstructions,
            req.body.endingInstructions,
            req.body.categories,
            req.body.author
        )
        if (!newGame) {
            throw errors.InternalError(new Error("Game could not be created"), "Game could not be created")
        }

        res.status(201).json(newGame)

    }

    export async function updateGame(req, res) {

        if (!req.params.gameID) {
            throw errors.UnprocessableEntity("Mandatory values missing, cannot update game.")
        }

        let updatedGame = await gameRepository.updateGame(
            req.params.gameID,
            req.body.title,
            req.body.actionScore,
            req.body.cognitiveScore,
            req.body.numberOfPlayer,
            req.body.duration,
            req.body.ageLimitations,
            req.body.spaceLimitations,
            req.body.materials,
            req.body.goalOfGame,
            req.body.preparationsInstructions,
            req.body.gameplayInstructions,
            req.body.endingInstructions,
            req.body.categories,
            req.body.author,
            req.body.twoAMGame
        )
        if (!updatedGame) {
            throw errors.InternalError(new Error("Game could not be updated"), "Game could not be updated")
        }

        res.status(200).json(updatedGame)

    }

    export async function setReviewStatus(req, res) {

        if (!req.params.gameID) {
            throw errors.UnprocessableEntity("Mandatory values missing, cannot update game.")
        }

        let updatedGame = await gameRepository.setReviewStatus(
            req.params.gameID,
            req.query.reviewed
        )

        if (!updatedGame) {
            throw errors.InternalError(new Error("Game could not be updated"), "Game could not be updated")
        }

        res.status(200).json(updatedGame)

    }


}