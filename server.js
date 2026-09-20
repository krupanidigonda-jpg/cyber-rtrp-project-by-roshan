
const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

let users = []; // temporary storage

// REGISTER
app.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    users.push({ name, email, password });

    console.log(users);
    res.send("Registration Successful");
});

// LOGIN
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if(user){
        res.send("Login Successful");
    } else {
        res.send("Invalid Email or Password");
    }
});

module.exports = app;
