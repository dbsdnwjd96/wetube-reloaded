import express from "express";
import morgan from "morgan";
import golbal from "./routers/golbalRouter";
import user from "./routers/userRouter";
import video from "./routers/videoRouter";

/* 1. Make express application */
const PORT = 4000;
const app = express();

/* 1. Make easy way to make Middlewares */
const logger = morgan("dev");
app.use(logger);

/* 2. Make Router */
app.use("/", golbal);
app.use("/users", user);
app.use("/videos", video);


const handleListening = () =>
    console.log(`Server listening on http://localhost:${PORT} 🚀`);


app.listen(PORT, handleListening);