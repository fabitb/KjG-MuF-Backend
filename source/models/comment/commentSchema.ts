import mongoose, {Document, model, Schema} from 'mongoose';

export interface CommentInterface extends Document {
    author: string,
    commentMessage: string
}

const CommentSchema: Schema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },

    commentMessage: {
        type: String,
        required: true
    }
    
}, {
    timestamps: true
})

export const Comment = model<CommentInterface>('Comment', CommentSchema);