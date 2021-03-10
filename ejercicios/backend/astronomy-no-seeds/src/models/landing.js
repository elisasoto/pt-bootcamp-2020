const mongoose = require('mongoose')
const { Schema } = mongoose

const LandingSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  id: {
    type: String,
    unique: true,
    required: true
  },
  nametype: {
    type: String,
  },
  recclass: {
    type: String,
  },
  mass: {
    type: String,
  },
  fall: {
    type: String,
  },
  year: {
    type: Date,
  },
  reclat: {
    type: String,
  },
  reclong: {
    type: String,
  },
  geolocation: {
    reclat: {
        type: String,
    },
    reclong: {
        type: String,
    }
  }
})

const Landings = mongoose.model('landings', LandingSchema)

module.exports = Landings