const express = require('express')
const app = express()
const cors = require('cors')

//middleware
app.use(cors())
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

//users log in
const loginRouter = require('./routes/login')
app.use('/', loginRouter)

//users sign up
const signupRouter = require('./routes/signup')
app.use('/', signupRouter)

//get all diaries
const diariesRouter = require('./routes/diaries')
app.use('/',diariesRouter)

app.listen(process.env.PORT || 3000)