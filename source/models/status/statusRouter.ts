import asyncHandler from 'express-async-handler';
import { Router } from "express";
import { statusGetController } from "./statusGetController";

export const statusRouter = Router()

statusRouter.get('/status', asyncHandler(statusGetController.getStatus))