import asyncHandler from 'express-async-handler';
import {Router} from "express";
import { beverageGetController } from './beverageGetController';

export const beverageRouter = Router();

beverageRouter.get('/beverages', asyncHandler(beverageGetController.getBeverages))

