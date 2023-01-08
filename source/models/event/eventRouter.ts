import asyncHandler from 'express-async-handler';
import { Router } from "express";
import { eventGetController } from './eventGetController';
import { eventPostController } from './eventPostController';

export const eventRouter = Router()

eventRouter.post('/events/:midaEventID/comments', asyncHandler(eventPostController.createCommentForEvent))

eventRouter.get('/events', asyncHandler(eventGetController.getEvents))
eventRouter.get('/events/:eventID/comments', asyncHandler(eventGetController.getCommentsOfEvent))
