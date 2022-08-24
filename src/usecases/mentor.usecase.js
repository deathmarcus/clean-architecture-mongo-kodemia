const Mentor = require("../models/mentor.model")

const createMentor = (mentorData) => {
    const mentor = Mentor.create(mentorData)
    return mentor
}

const getMentor = (id) => {
    const mentor = Mentor.findById(id)
    return mentor
}

const allMentors = (filters) => {
    const mentors = Mentor.find(filters)
    return mentors
}

const updateMentor = (id, mentorData) => {
    const mentor = Mentor.findByIdAndUpdate(id, mentorData, { returnDocument: "after" })
    return mentor
}

const removeMentor = (id) => {
   const mentor = Mentor.findByIdAndDelete(id)
   return mentor

}

module.exports = { createMentor, getMentor, allMentors, updateMentor, removeMentor }