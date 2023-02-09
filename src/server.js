import express, { application } from "express";

/* 1. Make express application */
const PORT = 4000;
const app = express();

/* 누군가가 어떤 Route로(home으로 Get request를 보낸다면) */
const handleHome = (req, res) => {
    return res.send("hi");
}

const handleLogin = (req, res) => {
    return res.send("<h1>Login Here</h1>");
}

app.get("/", handleHome);
//handleHome({Request Object...}, {Response Object...})
app.get("/login", handleLogin)

const handleListening = () =>
    console.log(`Server listening on http://localhost:${PORT} 🚀`);


app.listen(PORT, handleListening);