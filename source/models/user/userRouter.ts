import asyncHandler from 'express-async-handler';
import { Router } from "express";
import { userGetController } from './userGetController';
import { userDeleteController } from './userDeleteController';

export const userRouter = Router()

userRouter.get('/users/:userName', asyncHandler(userGetController.getUserByName))
userRouter.get('/users/:userName/miles', asyncHandler(userGetController.getMilesOfUser))

userRouter.delete('/users/:userID', asyncHandler(userDeleteController.deleteUser))