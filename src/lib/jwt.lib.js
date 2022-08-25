const jwt = require("jsonwebtoken")
const { JWT_SECRET_KEY} = process.env
const sign = (payload = {}) =>{
    return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "8h"})
}

module.exports = { sign }