const express = require('express')
const router = express.Router()
const pool = require('../database/db')

router.route('/:username')
.get(async (req,res) => {
  try {
    const allDiary = await pool.query(`SELECT diary_list FROM ${req.params.username}`);
    res.status(201).json(allDiary.rows)
  } catch (error) {
    res.status(500).send(error)
  }
})
.post(async (req,res) => {
  try {
    const diary_list = (await pool.query(`SELECT diary_list FROM ${req.params.username};`))
    .rows[0].diary_list

    if(diary_list != null) {
      await pool.query(`UPDATE ${req.params.username} SET diary_list = diary_list || '${JSON.stringify(req.body.diary)}' ::jsonb;`)
    } else {
      await pool.query(`UPDATE ${req.params.username} SET diary_list='[${JSON.stringify(req.body.diary)}]';`)
    }
  }catch (error){
    res.status(500).send(error)
  }
})
.put((req,res) => {

})
.delete(async (req,res) => {
  try{
    
  }catch (error){

  }
})


module.exports = router