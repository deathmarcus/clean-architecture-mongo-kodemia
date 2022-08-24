const mongoose = require("mongoose")

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlenght: 3,
        maxlenght: 25,
        required: true
    },
    module: {
        type: String
      },
      team: {
        type: String
      },
      generation: {
        type: String
      },
      age: {
        type: Number
      },
      sex: {
        type: String,
        enum: ["f", "m", "o"]
      },
      type: {
        type: String,
        enum: ["ProgramLead", "Mentor", "B-Mentor"]
      }
})

const Mentor = mongoose.model("mentores", mentorSchema)

module.exports = Mentor