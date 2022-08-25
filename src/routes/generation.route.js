const express = require("express")
const {
    createGeneration
} = require("../usecases/generation.usecase")

const router = express.Router()

router.post("/", async (request, response) => {
    try {
        const { body } = request
        const [generation] = await createGeneration(body)
        response.status(201)
        response.json({
            success: true,
            data: {
                generation
            }
        }) 
    }catch(error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
}
})

module.exports = router