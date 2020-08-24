const express = require("express")
const app = express()

const port = 1010
app.listen(port, () => console.log(`server running on port ${port}`))

app.get("/kubus/:sisi", (req, res) => {
    let sisi = req.params.sisi,
        volume = sisi ** 3,
        luas = (sisi ** 2) * 6,
        result = {
            sisi: sisi,
            volume: volume,
            luas: luas
        }
    res.json(result)
})

app.get("/balok/:panjang/:lebar/:tinggi", (req, res) => {
    let panjang = req.params.panjang,
        lebar = req.params.lebar,
        tinggi = req.params.tinggi,
        volume = panjang * lebar * tinggi,
        luas = (2 * panjang * tinggi) +
        (2 * panjang * lebar) +
        (2 * tinggi * lebar),
        result = {
            panjang: panjang,
            lebar: lebar,
            tinggi: tinggi,
            volume: volume,
            luas: luas
        }
    res.json(result)

})

app.get("/bola/:r", (req, res) => {
    let r = req.params.r,
        pi = 3.14,
        volume = (4 / 3) * pi * (r ** 3),
        luas = 4 * pi * (r ** 2),
        result = {
            jari_jari: r,
            volume: volume,
            luas: luas
        }
    res.json(result)
})

app.get("/kerucut/:r/:tinggi", (req, res) => {
    let r = req.params.r,
        tinggi = req.params.tinggi,
        pi = 3.14,
        s = Math.sqrt((r ** 2) + (tinggi ** 2)),
        volume = (1 / 3) * pi * (r ** 2) * tinggi,
        luas = pi * r * (r + s),
        result = {
            jari_jari: r,
            tinggi: tinggi,
            garis_pelukis: s,
            volume: volume,
            luas: luas
        }
    res.json(result)
})