const express = require("express"),
    app = express(),
    port = 4040,
    bodyParser = require("body-parser"),
    cors = require("cors")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.listen(port, (req, res) => console.log(`sever running on port ${port}`))

app.post("/bmi", (req, res) => {
    let berat = Number(req.body.berat),
        tinggi = Number(req.body.tinggi),
        bmi = berat / (tinggi ** 2),
        status, result
    if (bmi < 18.5) {
        status = "kekurangan berat badan"
    } else if (bmi > 18.5 && bmi < 24.9) {
        status = "normal (ideal)"
    } else if (bmi > 25 && bmi < 29.9) {
        status = "kelebihan berat badan"
    } else if (bmi > 30) {
        status = "kegemukan (obesitas)"
    }
    result = {
        tinggi: tinggi,
        berat: berat,
        bmi: bmi,
        status: status
    }
    res.json(result)
})