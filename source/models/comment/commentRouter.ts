import asyncHandler from 'express-async-handler';
import { Router } from "express";
import { commentDeleteController } from './commentDeleteController';

export const commentRouter = Router()

commentRouter.delete('/comments/:commentID', asyncHandler(commentDeleteController.deleteComment))

