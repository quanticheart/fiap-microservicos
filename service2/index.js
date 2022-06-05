// noinspection JSUnresolvedFunction

const bankRoutes = require("./routes/bank")
const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/bank/", bankRoutes)

app.get("/", (req, res) => {
    res.send({output: req.headers})
});

/**
 * Middleware - 404
 */
app.use((req, res) => {
    res.type("application/json")
    res.status(404).send({output: `404`})
})

app.listen(process.env.port, () => {
    console.log(`OK ${process.env.port}`)
})