import { FilterQuery } from "mongoose";
import { CommentInterface } from "../../models/comment/commentSchema";
import { Event, EventInterface } from "../../models/event/eventSchema";

export module eventRepository {

    export async function getEvents(): Promise<EventInterface[]> {
        let events = await Event.find({})
            .populate('comments')
            .exec()
        return events
    }

    export async function getPopulatedEventByID(eventID: number): Promise<EventInterface | null> {
        return await Event.findOne({midaID: eventID})
            .populate('comments')
            .exec()
    }

    export async function getCommentsByEventID(eventID: number): Promise<CommentInterface[]> {
        let event = await Event.findOne({midaID: eventID}).exec();
        return event ? event.comments : [];
    }

    export async function createNewEvent(midaID: number): Promise<EventInterface> {
        let newEvent = new Event({
            midaID: midaID
        })
        await newEvent.save()
        return newEvent
    }

    export async function addCommentToEvent(event: EventInterface, commentID: any): Promise<EventInterface> {
        event.comments.push(commentID)
        await event.save()
        return event
    }

}