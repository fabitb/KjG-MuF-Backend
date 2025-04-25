import mongoose from "mongoose";
import http from "http";
import app from "./app";
import * as dotenv from "dotenv";

mongoose.connect("mongodb://127.0.0.1:27017/kjg-db", {
    autoCreate: true,
    autoIndex: true,
}, (err) => {
    console.log(`error: ${err}`);
});

dotenv.config();

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3000;
const server = httpServer.listen(PORT, () => {
    console.info(
        "App is running at http://localhost:%d",
        PORT,
    );
});

export default server;