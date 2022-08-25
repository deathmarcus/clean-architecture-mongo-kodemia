
const { application } = require("express")
const express = require("express")

const server = express()

// Router
const routerKoder = require("./routes/koder.route")
const routerMentor = require("./routes/mentor.route")
const routerGeneration = require("./routes/generation.route")
const routerUser = require("./routes/user.route")
const routerAuth = require("./routes/auth.route")

// Middleware de json
// Middlewares

server.use(express.json())
server.use("/koders", routerKoder)
server.use("/mentors", routerMentor)
server.use("/generation", routerGeneration)
server.use("/users", routerUser)
server.use("/auth", routerAuth)

// Exportar 
// Solo exporta una cosa
module.exports = server
