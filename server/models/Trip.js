const mongoose = require('mongoose')

const TripSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Trip', TripSchema)
