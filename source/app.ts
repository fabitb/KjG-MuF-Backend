import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';

import { beverageRouter } from "./models/beverage/beverageRouter";
import { statusRouter } from './models/status/statusRouter';
import { eventRouter } from './models/event/eventRouter';
import { commentRouter } from './models/comment/commentRouter';
import { userRouter } from './models/user/userRouter';
import { milesRouter } from './models/miles/milesRouter';
import { gamesRouter } from './models/games/gamesRouter';

const API_BASE_PATH = '/api';
const app = express();

app.set("port", 443)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use(API_BASE_PATH, beverageRouter);
app.use(API_BASE_PATH, statusRouter);
app.use(API_BASE_PATH, eventRouter);
app.use(API_BASE_PATH, commentRouter);
app.use(API_BASE_PATH, userRouter);
app.use(API_BASE_PATH, milesRouter);
app.use(API_BASE_PATH, gamesRouter)

export default app;