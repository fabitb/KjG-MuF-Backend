import mongoose, { Document, model, Schema } from "mongoose";
import { MilesInterface } from "../miles/milesSchema";

export interface UserInterface extends Document {

    userName: string,
    miles: MilesInterface

}

const UserSchema: Schema = new mongoose.Schema({

    userName: {
        type: String,
        required: true,
        unique: true
    },

    miles: {
        type: Schema.Types.ObjectId,
        ref: 'Miles'
    }

}, {
    timestamps: true
})

export const User = model<UserInterface>('User', UserSchema);