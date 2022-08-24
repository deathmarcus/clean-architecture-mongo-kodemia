const express = require("express")
const {
    createMentor,
    createGeneration
} = require("../usecases/generation.usecase")

const router = express.Router()

router.post("/", async (request, response) => {
    try {
        const { body } = request
        console.log(body.mentors)
        const generation = await createGeneration(body)
        const mentor = await createMentor(body.mentors)
        response.status(201)
        response.json({
            success: true,
            data: {
                generation,
                mentor
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