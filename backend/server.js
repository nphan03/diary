const express = require('express')
const app = express()
const cors = require('cors')

//middleware
app.use(cors())
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

//get all diaries
const diariesRouter = require('./routes/diaries')
app.use('/',diariesRouter)

app.listen(process.env.PORT || 3000)