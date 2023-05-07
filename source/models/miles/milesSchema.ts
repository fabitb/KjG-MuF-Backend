import mongoose, { Document, model, Schema } from "mongoose"

export interface MilesInterface extends Document {

    milesCount: number,
    transactions: [MilesTransactionInterface]

}

const MilesSchema: Schema = new mongoose.Schema({

    milesCounts: {
        type: Number,
        default: 0,
        required: true
    },

    transactions: [{
        type: Schema.Types.ObjectId,
        ref: "Transaction"
    }]

}, {
    timestamps: true
})

export const Miles = model<MilesInterface>('Miles', MilesSchema);


export interface MilesTransactionInterface extends Document {

    milesTransacted: number,
    description: string,
    date: Date

}

const MilesTransactionSchema: Schema = new mongoose.Schema({

    milesTransacted: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

export const MilesTransaction = model<MilesTransactionInterface>('Transaction', MilesTransactionSchema);