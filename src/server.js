import express from "express";
import morgan from "morgan";
import global from "./routers/globalRouter";
import user from "./routers/userRouter";
import video from "./routers/videoRouter";

/* 1. Make express application */
const PORT = 4000;
const app = express();

/* 1. Make easy way to make Middlewares */
const logger = morgan("dev");
app.use(logger);

/* 3. Make Template */
app.set("view engine", "pug");
app.set('views', process.cwd() + "/src/views");

/* 2. Make Router */
app.use("/", global);
app.use("/users", user);
app.use("/videos", video);


const handleListening = () =>
    console.log(`Server listening on http://localhost:${PORT} 🚀`);


app.listen(PORT, handleListening);