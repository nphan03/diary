const express = require('express')
const router = express.Router()
const pool = require('../database/db')

router.route('/:username')
.get(async (req,res) => {
  try {
    const allDiary = await pool.query(`SELECT * FROM ${req.params.username}_diary`);
    res.json(allDiary.rows)

  } catch (error) {
    console.log(error)
  }
})
.put((req,res) => {

})
.post((req,res) => {

})
.delete((req,res) => {

})


module.exports = router