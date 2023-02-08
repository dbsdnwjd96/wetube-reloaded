import express, { application } from "express";

/* 1. Make express application */
const PORT = 4000;
const app = express();

const handleListening = () =>
    console.log(`Server listening on http://localhost:${PORT} 🚀`);


app.listen(PORT, handleListening);