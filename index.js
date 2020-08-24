const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())

const port = 9090
app.listen(port, () => console.log(`server run on port ${port}`))


app.get("/test", (req, res) => {
    let response = {
        massage: "ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }
    res.json(response)
})


app.get("/profil/:name/:age", (req, res) => {
    let name = req.params.name,
        age = req.params.age,
        response = {
            nama: name,
            umur: age
        }
    res.json(response)
})

app.post("/bujur_sangkar", (req, res) => {
    let panjang = Number(req.body.panjang),
        lebar = Number(req.body.lebar),
        luas = panjang * lebar,
        keliling = 2 * (panjang + lebar),
        response = {
            panjang: panjang,
            lebar: lebar,
            luas: luas,
            keliling: keliling
        }
    res.json(response)
})