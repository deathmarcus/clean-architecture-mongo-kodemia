const mongoose = require("mongoose")

const koderSchema = new mongoose.Schema ({
    name: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true
    },
    modulo: {
        type: String,
    },
    edad: {
        type: Number,
        min: 18,
        max: 150
    },
    generacion: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        enum: ["f", "m", "o"]
    }
})

const Koder = mongoose.model("koders", koderSchema)

module.exports = Koder