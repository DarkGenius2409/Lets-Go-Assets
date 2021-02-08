const express = require('express')
const bodyParser = require("body-parser")

const app = express()

app.use(app.use(bodyParser.urlencoded({
    extended: true
})));

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(process.env.PORT || 8080, () => {
    console.log("up and running on port 8080")
})