import * as dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import http from "http";
import app from "./app";

// Configure MongoDB connection from environment variables
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DATABASE = process.env.MONGODB_DATABASE;
const connectionString = `${MONGODB_URI}/${MONGODB_DATABASE}`;

console.info(`Connecting to MongoDB at ${connectionString}...`);

mongoose.connect(connectionString, {
    autoCreate: true,
    autoIndex: true,
}, (err) => {
    if (err) {
        console.error(`MongoDB connection error: ${err}`);
        console.error("Failed to connect to MongoDB. Exiting...");
        process.exit(1);
    }
    console.info("Successfully connected to MongoDB");
});

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3000;
const server = httpServer.listen(PORT, () => {
    console.info(
        "App is running at http://localhost:%d",
        PORT,
    );
});

export default server;

export function verifyToken(token: string): boolean {

    const actualToken = process.env.TOKEN

    if (!actualToken) {
        console.error("TOKEN is not defined in .env file")
        return false
    }

    return token === actualToken
}