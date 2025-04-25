import mongoose from "mongoose";
import http from "http";
import https from "https";
import fs from "fs";
import app from "./app";

const privateKey = fs.readFileSync('/etc/letsencrypt/live/app.kjg-muenchen.de/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/app.kjg-muenchen.de/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/app.kjg-muenchen.de/chain.pem', 'utf8');

const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
};

mongoose.connect("mongodb://127.0.0.1:27017/kjg-db", {
    autoCreate: true,
    autoIndex: true,
}, (err) => {
    console.log(`error: ${err}`);
});

const httpServer = http.createServer(app);
//const httpsServer = https.createServer(credentials, app);

const server = httpServer.listen(3000, () => {
    console.info(
        "  App is running at http://localhost:%d ",
        app.get("port"),
    );
});

export default server;