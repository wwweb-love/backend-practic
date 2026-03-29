const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { register } = require("./controllers/user");
const mapUser = require("./helpers/mapUser");

const PORT = 3001
const app = express()

app.use(cookieParser())
app.use(express.json())



app.post("/register", async (req, res) => {
    try {
        const user = await register(req.body.login, req.body.password)

        res.send({ error: null, user: mapUser(user) })
    } catch(e) {
        res.send({error: e.message || "Unknown error"})
    }
})


mongoose.connect("mongodb://user:mongopass@localhost:27017/").then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
    })
})