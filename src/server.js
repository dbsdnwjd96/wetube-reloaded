import express, { application } from "express";
import morgan from "morgan";

/* 1. Make express application */
const PORT = 4000;
const app = express();
const logger = morgan("dev");

// const routerLogger = (req, res, next) => {
//     console.log(`"PATH", ${req.path}`);
//     next();
// }
// const methodlogger = (req, res, next) => {
//     console.log(`"METHOD", ${req.method}`);
//     next();

// }
const handleHome = (req, res, next) => {
    console.log("I'll respond.")
    return res.send("hi");
}
// app.use(methodlogger, routerLogger);
app.use(logger);
app.get("/", handleHome);

const handleListening = () =>
    console.log(`Server listening on http://localhost:${PORT} 🚀`);


app.listen(PORT, handleListening);