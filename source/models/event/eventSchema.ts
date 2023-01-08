import mongoose, {Document, model, Schema} from 'mongoose';
import { CommentInterface } from '../comment/commentSchema';

export interface EventInterface extends Document {

    midaID: number,
    comments: [CommentInterface]

}

const EventSchema: Schema = new mongoose.Schema({
    midaID: {
        type: Number,
        required: true,
        unique: true
    },

    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, {
    timestamps: true
})

export const Event = model<EventInterface>('Event', EventSchema);