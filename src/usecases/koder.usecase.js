const Koder = require("../models/koder.model")

// Funcion

const create = (koderData) => {
    // Crear un koder
    const koder = Koder.create(koderData)
    return koder
}

module.exports = { create }
