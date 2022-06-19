const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./database/db')

//middleware
app.use(cors())
app.use(express.json())

//ROUTES
//create user

//update
// INSERT INTO alicephan_diary (diary_owner_username, diary_owner_password, diary_list) VALUES ('alicephan', '1234567890', '{"text": "Hi World", "date": "Sat, July 18, 2022"}');
app.put('/', async (req,res) => {
  try {
    console.log(req.body)
  } catch (error) {
    console.log(error)
  }
})

//get all diaries
app.get('/', async (req,res) => {
  try {
    const allDiary = await pool.query('SELECT * FROM alicephan_diary');
    res.json(allDiary.rows)
    console.log(allDiary)
  } catch (error) {
    console.log(error)
  }
})

app.listen(process.env.PORT || 3000)

