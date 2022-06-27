const express = require('express')
const router = express.Router()
const pool = require('../database/db')

router.route('/:username')
.get(async (req,res) => {
  try {
    const allDiary = await pool.query(`SELECT * FROM ${req.params.username}_diaries ORDER BY diary_id DESC;`)
    
    res.status(201).json(allDiary.rows)
  } catch (error) {
    res.status(500).send(error)
  }
})
.post(async (req,res) => {
  try {
    const diary = await pool.query(`
      INSERT INTO ${req.params.username}_diaries (diary_date, diary_text, diary_owner)
      VALUES ('${req.body.diary_date}', '${req.body.diary_text}', (SELECT user_id FROM users WHERE user_name='${req.params.username}'))
      RETURNING *;
    `)

    res.status(201).send(diary)
  }catch (error){
    res.status(500).send(error)
  }
})
.put(async (req,res) => {
  try{
    await pool.query(`
      UPDATE  ${req.params.username}_diaries SET diary_text='${req.body.newText}' WHERE diary_id='${req.body.diary_id}';
    `)
    res.status(201).send(`Updated diary`)
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