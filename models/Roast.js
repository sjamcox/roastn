const mongoose = require('mongoose')

const RoastSchema = new mongoose.Schema(
  {
    email: String,
    roaster: String,
    beanOrigin: String,
    beanWeight: String,
    roomTemperature: String,
    startTime: String,
    firstCrack: String,
    secondCrack: String,
    totalTime: String,
    notes: String,
  },
  { timestamps: true }
)

const Roast = mongoose.models.Roast || mongoose.model('Roast', RoastSchema)

export default Roast
