import { Game, GameInterface } from "../../models/games/gameSchema";

export module gameRepository {

    export async function getGames(reviewed: boolean = true, twoAMGame: boolean = false): Promise<GameInterface[]> {
        return await Game.find({ reviewed: reviewed, twoAMGame: twoAMGame }).exec()
    }

    export async function createNewGame(
        title: string,
        actionScore: number,
        cognitiveScore: number,
        numberOfPlayer: string,
        duration: string,
        ageLimitations: string,
        spaceLimitations: string,
        materials: string,
        goalOfGame: string,
        preparationsInstructions: string,
        gameplayInstructions: string,
        endingInstructions: string,
        categories: [string],
        author: string) {

        let newGame = new Game({
            title: title,
            actionScore: actionScore,
            cognitiveScore: cognitiveScore,
            numberOfPlayer: numberOfPlayer,
            duration: duration,
            ageLimitations: ageLimitations,
            spaceLimitations: spaceLimitations,
            materials: materials,
            goalOfGame: goalOfGame,
            preparationsInstructions: preparationsInstructions,
            gameplayInstructions: gameplayInstructions,
            endingInstructions: endingInstructions,
            categories: categories,
            author: author,
            reviewed: false,
            twoAMGame: false
        })
        await newGame.save()
        return newGame

    }

    export async function updateGame(
        _id: string,
        title: string,
        actionScore: number,
        cognitiveScore: number,
        numberOfPlayer: string,
        duration: string,
        ageLimitations: string,
        spaceLimitations: string,
        materials: string,
        goalOfGame: string,
        preparationsInstructions: string,
        gameplayInstructions: string,
        endingInstructions: string,
        categories: [string],
        author: string,
        twoAMGame: boolean) {

        let updatedGame = await Game.findByIdAndUpdate(
            _id,
            {
                title: title,
                actionScore: actionScore,
                cognitiveScore: cognitiveScore,
                numberOfPlayer: numberOfPlayer,
                duration: duration,
                ageLimitations: ageLimitations,
                spaceLimitations: spaceLimitations,
                materials: materials,
                goalOfGame: goalOfGame,
                preparationsInstructions: preparationsInstructions,
                gameplayInstructions: gameplayInstructions,
                endingInstructions: endingInstructions,
                categories: categories,
                author: author,
                twoAMGame: twoAMGame
            },
            {
                new: true
            }
        )

        return updatedGame
    }

    export async function setReviewStatus(_id: string, reviewed: boolean) {

        let updatedGame = await Game.findByIdAndUpdate(
            _id,
            {
                reviewed: reviewed
            },
            {
                new: true
            }
        )

        return updatedGame

    }

    export async function deleteGameByID(_id: string): Promise<boolean> {
        let result = await Game.findByIdAndDelete(_id)
        return (result != undefined)

    }

}