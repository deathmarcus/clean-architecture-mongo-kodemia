const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const createError = require("http-errors")
const jwt = require("../lib/jwt.lib")
// Login
const login = async (email, textPlainPassword) => {
    // 1- Comprobar que el correo si sea el de mi bd
    const user = await User.findOne({ email })
    // Si el usuario es nulo -> No lo encontro -> No hay alguien con ese correo
    if(!user) throw createError(401, "No estas autorizado")
        // Lanzar error
    // 2- Validar que el password sea el de mi bd
    const isValidPassword = await bcrypt.compare(textPlainPassword, user.password)
    if(!isValidPassword) throw createError(401, "No estas autorizado")

    // Regresar el token
    const token = jwt.sign({ id: user._id })
    return token
}

module.exports = { login }