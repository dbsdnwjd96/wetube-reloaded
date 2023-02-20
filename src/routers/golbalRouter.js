import express from "express";

const golbalRouter = express.Router();

const handleHome = (req, res) => {
    res.send("Home");
}

golbalRouter.get("/", handleHome);

export default golbalRouter;


