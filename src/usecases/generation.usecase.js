const Generation = require("../models/generation.model")
const Mentor = require("../models/mentor.model")

const createMentor = (mentorData) => {
    const mentor = Mentor.create(mentorData)
    return mentor
}

const createGeneration = async (generationData) => {
    const generation = await Generation.create(generationData)
    const { mentors } = generation
    const mentor = Mentor.insertMany(mentors)
    return [generation]
}

module.exports = { createGeneration, createMentor}