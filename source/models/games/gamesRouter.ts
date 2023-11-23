import asyncHandler from 'express-async-handler';
import { Router } from "express";
import { gamesGetController } from "./gamesGetController";
import { gamesPostController } from './gamesPostController';
import { gamesDeleteController } from './gamesDeleteController';

export const gamesRouter = Router()

gamesRouter.get('/games', asyncHandler(gamesGetController.getGames))

gamesRouter.post('/game', asyncHandler(gamesPostController.createGame))
gamesRouter.post('/game/:gameID/reviewed', asyncHandler(gamesPostController.setReviewStatus))

gamesRouter.delete('/game/:gameID', asyncHandler(gamesDeleteController.deleteGameByID))

gamesRouter.put('/game/:gameID', asyncHandler(gamesPostController.updateGame))