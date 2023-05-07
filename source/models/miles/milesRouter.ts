import asyncHandler from 'express-async-handler';
import { Router } from "express";
import { milesPostController } from './milesPostController';

export const milesRouter = Router()

milesRouter.post('/miles/transaction/:userName', asyncHandler(milesPostController.createTransaction))