import mongoose, { Document, model, Schema } from "mongoose";

export interface GameInterface extends Document {

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
    reviewed: boolean,
    twoAMGame: boolean

}

const GameSchema: Schema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    actionScore: {
        type: Number,
        required: true
    },

    cognitiveScore: {
        type: Number,
        required: true
    },

    numberOfPlayer: {
        type: String,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

    ageLimitations: {
        type: String,
    },

    spaceLimitations: {
        type: String,
    },

    materials: {
        type: String,
    },

    goalOfGame: {
        type: String,
    },

    preparationsInstructions: {
        type: String,
    },

    gameplayInstructions: {
        type: String,
    },

    endingInstructions: {
        type: String,
    },

    categories: [{
        type: String
    }],

    author: {
        type: String,
        required: true,
    },

    reviewed: {
        type: Boolean,
        required: true
    },

    twoAMGame: {
        type: Boolean,
        required: true
    }

}, {
    timestamps: true
})

export const Game = model<GameInterface>('Game', GameSchema)