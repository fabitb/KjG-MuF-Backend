import asyncHandler from 'express-async-handler';
import { Router } from "express";
import { gamesGetController } from "./gamesGetController";

export const gamesRouter = Router()

gamesRouter.get('/games', asyncHandler(gamesGetController.getGames))