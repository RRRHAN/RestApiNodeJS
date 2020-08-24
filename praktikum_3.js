const express = require("express"),
    app = express(),
    port = 3030

app.listen(port, (req, res) => console.log(`sever running on port ${port}`))

app.get("/:satuan/:angka", (req, res) => {
    let satuan, angka, biner, decimal, oktal, hexa, result
    satuan = req.params.satuan.toLowerCase()
    angka = req.params.angka
    if (satuan == "biner") {
        biner = Number(angka)
        decimal = b2d(biner)
        oktal = b2o(biner)
        hexa = b2h(biner)
        result = {
            biner: biner,
            result: {
                decimal: decimal,
                oktal: oktal,
                hexa: hexa
            }
        }
    } else if (satuan == "decimal") {
        decimal = Number(angka)
        biner = d2b(decimal)
        oktal = d2o(decimal)
        hexa = d2h(decimal)
        result = {
            decimal: decimal,
            result: {
                biner: biner,
                oktal: oktal,
                hexa: hexa
            }
        }
    } else if (satuan == "oktal") {
        oktal = Number(angka)
        biner = o2b(oktal)
        decimal = o2d(oktal)
        hexa = o2h(oktal)
        result = {
            oktal: oktal,
            result: {
                decimal: decimal,
                biner: biner,
                hexa: hexa
            }
        }
    } else if (satuan == "hexa") {
        hexa = angka
        biner = h2b(hexa)
        decimal = h2d(hexa)
        oktal = h2o(hexa)
        result = {
            hexa: hexa,
            result: {
                decimal: decimal,
                oktal: oktal,
                biner: biner
            }
        }
    }
    res.json(result)
})

b2o = (binary) => {
    let octal = parseInt(Number(binary), 2).toString(8)
    return octal
}

b2h = (binary) => {
    let hexa = parseInt(Number(binary), 2).toString(16)
    return hexa
}

b2d = (binary) => {
    let decimal = Number(parseInt(binary, 2))
    return decimal
}

d2b = (decimal) => {
    let binary = "";
    let temp = decimal;

    while (temp > 0) {
        if (temp % 2 == 0) {
            binary = "0" + binary;
        } else {
            binary = "1" + binary;
        }

        temp = Math.floor(temp / 2);
    }

    return binary
}

d2o = (decimal) => {
    let octal = "";
    let temp = decimal;

    while (temp > 0) {
        if (temp % 8 == 0) {
            octal = "0" + octal;
        } else if (temp % 8 == 1) {
            octal = "1" + octal;
        } else if (temp % 8 == 2) {
            octal = "2" + octal;
        } else if (temp % 8 == 3) {
            octal = "3" + octal;
        } else if (temp % 8 == 4) {
            octal = "4" + octal;
        } else if (temp % 8 == 5) {
            octal = "5" + octal;
        } else if (temp % 8 == 6) {
            octal = "6" + octal;
        } else if (temp % 8 == 7) {
            octal = "7" + octal;
        }
        temp = Math.floor(temp / 8);
    }

    return octal
}

d2h = (decimal) => {
    let hexa = "";
    let temp = decimal;

    while (temp > 0) {
        if (temp % 16 == 0) {
            hexa = "0" + hexa;
        } else if (temp % 16 == 1) {
            hexa = "1" + hexa;
        } else if (temp % 16 == 2) {
            hexa = "2" + hexa;
        } else if (temp % 16 == 3) {
            hexa = "3" + hexa;
        } else if (temp % 16 == 4) {
            hexa = "4" + hexa;
        } else if (temp % 16 == 5) {
            hexa = "5" + hexa;
        } else if (temp % 16 == 6) {
            hexa = "6" + hexa;
        } else if (temp % 16 == 7) {
            hexa = "7" + hexa;
        } else if (temp % 16 == 8) {
            hexa = "8" + hexa;
        } else if (temp % 16 == 9) {
            hexa = "9" + hexa;
        } else if (temp % 16 == 10) {
            hexa = "A" + hexa;
        } else if (temp % 16 == 11) {
            hexa = "B" + hexa;
        } else if (temp % 16 == 12) {
            hexa = "C" + hexa;
        } else if (temp % 16 == 13) {
            hexa = "D" + hexa;
        } else if (temp % 16 == 14) {
            hexa = "E" + hexa;
        } else if (temp % 16 == 15) {
            hexa = "F" + hexa;
        }
        temp = Math.floor(temp / 16);
    }

    return hexa
}


o2b = (octal) => {
    let binary = parseInt(Number(octal), 8).toString(2)
    return binary
}

o2h = (octal) => {
    let hexa = parseInt(Number(octal), 8).toString(16)
    return hexa
}

o2d = (octal) => {
    let decimal = parseInt(Number(octal), 8)
    return decimal
}

h2b = (hexa) => {
    let binary = parseInt(hexa, 16).toString(2)
    return binary
}

h2o = (hexa) => {
    let octal = parseInt(hexa, 16).toString(8)
    return octal
}

h2d = (hexa) => {
    let decimal = parseInt(hexa, 16)
    return decimal
}