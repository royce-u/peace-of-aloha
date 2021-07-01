const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express()

var corsOptions = {
    origin: "http://localhost:3000"
};

const db = mysql.createConnection({
    user: "iamgroot",
    host: "localhost",
    password: "password",
    database: "peaceofaloha"
});

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.send("Testing")
});

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});