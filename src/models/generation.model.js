const mongoose = require("mongoose")

const generationSchema = new mongoose.Schema({
    name: {
        type: String,
        minlenght: 3,
        maxlenght: 10,
        required: true
    },
    type: {
        type: String,
        enum: ["Javascript", "Python"]
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    mentors: {
        type:
        [
            {
                name: {
                    type: String
                },
                module: {
                    type: String
                },
                age: {
                    type: Number
                  },
                  type: {
                    type: String,
                    enum: ["ProgramLead", "Mentor", "B-Mentor"]
                  }
            }
        ]
    }
})

const Generation = mongoose.model("generation", generationSchema)

module.exports = Generation