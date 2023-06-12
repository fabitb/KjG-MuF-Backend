import mongoose from "mongoose";
import http from "http";
import app from "./app";

mongoose.connect("mongodb://127.0.0.1:27017/kjg-db", {
    autoCreate: true,
    autoIndex: true,
}, (err) => {
    console.log(`error: ${err}`);
});

app.listen(80);

//const httpServer = http.createServer(app);
//const server = httpServer.listen(app.get("port"), () => {
//    console.info(
//        "  App is running at http://localhost:%d ",
//        app.get("port"),
//    );
//});

export default server;