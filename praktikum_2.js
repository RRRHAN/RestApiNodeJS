const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const {
    response
} = require("express")
const port = 2020

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())

app.listen(port, () => console.log(`server running on port ${port}`))

app.get("/convert/:satuan/:derajat", (req, res) => {
    let satuan = req.params.satuan.toLowerCase(),
        derajat = req.params.derajat
    let celcius, reamur, kelvin, fahrenheit, response
    if (satuan == "celcius") {
        celcius = Number(derajat)
        reamur = (4 / 5) * celcius
        kelvin = ((9 / 5) * celcius) + 32
        fahrenheit = celcius + 273

        response = {
            celcius: celcius,
            result: {
                reamur: reamur,
                kelvin: kelvin,
                fahrenheit: fahrenheit
            }
        }
    } else if (satuan == "reamur") {
        reamur = Number(derajat)
        celcius = (5 / 4) * reamur
        kelvin = ((5 / 4) * reamur) + 273
        fahrenheit = ((9 / 4) * reamur) + 32

        response = {
            reamur: reamur,
            result: {
                celcius: celcius,
                kelvin: kelvin,
                fahrenheit: fahrenheit
            }
        }
    } else if (satuan == "kelvin") {
        kelvin = Number(derajat)
        reamur = (4 / 5) * (kelvin - 273)
        celcius = kelvin - 273
        fahrenheit = ((9 / 5) * (kelvin - 273)) + 32

        response = {
            kelvin: kelvin,
            result: {
                reamur: reamur,
                celcius: celcius,
                fahrenheit: fahrenheit
            }
        }
    } else if (satuan == "fahrenheit") {
        fahrenheit = Number(derajat)
        kelvin = ((5 / 9) * (fahrenheit - 32)) + 273
        reamur = (4 / 9) * (fahrenheit - 32)
        celcius = (5 / 9) * (fahrenheit - 32)

        response = {
            fahrenheit: derajat,
            result: {
                reamur: reamur,
                kelvin: kelvin,
                celcius: celcius
            }
        }
    }
    res.send(response)
})