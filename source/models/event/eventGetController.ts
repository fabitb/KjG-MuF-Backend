import { eventRepository } from "../../repositories/eventRepository/eventRepository";
import * as errors from "../errors/kjgBackendError";

export module eventGetController {

    export async function getEvents(req, res) {
        let events = await eventRepository.getEvents()
        res.status(200).json(events);
    }

    export async function getCommentsOfEvent(req, res) {
        let eventID = req.params.eventID;

        if (!eventID) {
            throw errors.UnprocessableEntity("Mandatory value missing. Please provide an eventID")
        }

        let comments = await eventRepository.getCommentsByEventID(eventID)
        res.status(200).json(comments)
    }

}