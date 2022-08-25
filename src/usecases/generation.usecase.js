const Generation = require("../models/generation.model")
const { createMentor } = require("../usecases/mentor.usecase")


const createGeneration = async (generationData) => {
    const mentorsWithGeneration = generationData.mentors.map((mentor) =>({...mentor, generation: generationData.name}))
    const mentors = await createMentor(mentorsWithGeneration)
    const generation = await Generation.create({...generationData, mentors})
    return generation
}

module.exports = { createGeneration, createMentor}