const express = require('express')
const dotenv = require('dotenv')
const app = express()
const mongoose = require('mongoose')

dotenv.config()
app.use(express.json())
mongoose.set('strictQuery', false)

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('DB connection success'))
  .catch((err) => console.log(err))

app.listen(process.env.PORT || 8000, () => {
  console.log('backend start')
})
