const Generation = require("../models/generation.model")
const Mentor = require("../models/mentor.model")

const createMentor = (mentorData) => {
    const mentor = Mentor.create(mentorData)
    return mentor
}

const createGeneration = (generationData) => {
    const generation = Generation.create(generationData)
    return generation
}

module.exports = { createGeneration, createMentor}