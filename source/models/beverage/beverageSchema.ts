import mongoose, {Document, Model, model, Schema} from 'mongoose';

export interface BeverageInterface extends Document {
    name: string,
    price: number
}

const BeverageSchema: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    }
},{
    timestamps: true
})

export const Beverage = model<BeverageInterface>('Beverage', BeverageSchema);