// Endpoints
const express = require("express")
const { create } = require("../usecases/koder.usecase")

// Haciendo router
const router = express.Router()

// Endpoint de crear

router.post("/", async (request, response) => {
    // Recibir el request
    // Responder
    try {
        const { body } = request
        const koder = await create(body)
        response.status(201)
        response.json({
            success: true,
            data: {
                koder
            }
        })
    } catch(error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router