const express = require('express')
const router = express.Router()
const pool = require('../database/db')

router.route('/:username')
.get(async (req,res) => {
  try {
    const allDiary = await pool.query(`SELECT * FROM ${req.params.username}_diaries;`)
    
    res.status(201).json(allDiary.rows)
  } catch (error) {
    res.status(500).send(error)
  }
})
.post(async (req,res) => {
  try {
    await pool.query(`
      INSERT INTO ${req.params.username}_diaries (diary_date, diary_text, diary_owner)
      VALUES ('${req.body.date}', '${req.body.text}', (SELECT user_id FROM users WHERE user_name='${req.params.username}'))
      RETURNING diary_id;
    `)

    res.status(201).send('Updated diary list')
  }catch (error){
    res.status(500).send(error)
  }
})
.put(async (req,res) => {
  try{
    const modifiedDiaryDate = await pool.query(`
      UPDATE  ${req.params.username}_diaries SET diary_text='${req.body.newText}' WHERE diary_id='${req.body.id}'
      RETURNING diary_date;
    `)
    res.status(201).send(`Updated ${modifiedDiaryDate.rows[0].diary_date} diary`)
  }catch(error){
    res.status(500).send(error)
  }
})
.delete(async (req,res) => {
  try{
    await pool.query(`
      DELETE FROM ${req.params.username}_diaries WHERE diary_id='${req.body.id}';
    `)

    res.status(201).send('Updated diary list')
  }catch (error){
    res.status(500).send(error)
  }
})


module.exports = router