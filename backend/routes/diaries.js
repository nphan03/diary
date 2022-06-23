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
.put((req,res) => {

})
.post((req,res) => {

})
.delete((req,res) => {

})


module.exports = router