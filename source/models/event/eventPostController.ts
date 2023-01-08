import e from "express";
import { commentRepository } from "../../repositories/commentRepository/commentRepository";
import { eventRepository } from "../../repositories/eventRepository/eventRepository";
import * as errors from "../errors/kjgBackendError";

export module eventPostController {

    export async function createCommentForEvent(req, res) {
        let eventID = req.params.midaEventID;

        if(!eventID) {
            throw errors.UnprocessableEntity("Mandatory value missing")
        }

        if (!req.body.author || !req.body.message) {
            throw errors.UnprocessableEntity("Mandatory values missing, cannot create comment. Please provide a author and a message")
        }

        let event = await eventRepository.getPopulatedEventByID(eventID)
        if (!event) {
            event = await eventRepository.createNewEvent(eventID)

            if (!event) {
                throw errors.InternalError(new Error("Event could not be created"), "Event could not be created")
            }
        }

        let newComment = await commentRepository.createNewComment(req.body.author, req.body.message)
        if (!newComment) {
            throw errors.InternalError(new Error("Comment could not be created"), "Comment could not be created")
        }

        let success = await eventRepository.addCommentToEvent(event, newComment._id)
        if (!success) {
            throw errors.InternalError(new Error("Comment could not be added to event"), "Comment could not be added to event")
        }

        res.status(201).json(newComment)

    }

}