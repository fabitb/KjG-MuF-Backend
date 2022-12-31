import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';

import {beverageRouter} from "./models/beverage/beverageRouter";

const API_BASE_PATH = '/api';
const app = express();

app.set("port", 3000)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use(API_BASE_PATH, beverageRouter);

export default app;