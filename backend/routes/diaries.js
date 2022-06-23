const express = require('express')
const router = express.Router()
const pool = require('../database/db')

//Remove when done
const { v4: uuidv4 } = require('uuid')
////////////////

const findDiaryPositionById = async (id, username)=> {
  try{
    const getPositionResult = await pool.query(`SELECT position-1 FROM ${username}, jsonb_array_elements(diary_list) with ordinality arr(diary_object, position) WHERE username='${username}' and diary_object->>'id'='${id}';`)
    const object = getPositionResult.rows[0]
    return object[Object.keys(object)[0]]
    
  }catch (error){
    return error
  }
}

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
    //Remove when done
    const new_diary = { 
      "id": uuidv4(),
      ...req.body.diary
    }
    ///////////////////////

    const diary_list = (await pool.query(`SELECT diary_list FROM ${req.params.username};`))
    .rows[0].diary_list
    
    console.log(`UPDATE ${req.params.username} SET diary_list = diary_list || '${JSON.stringify(new_diary)}' ::jsonb;`)

    if(diary_list != null) {
      await pool.query(`UPDATE ${req.params.username} SET diary_list = diary_list || '${JSON.stringify(new_diary)}' ::jsonb;`)
      //await pool.query(`UPDATE ${req.params.username} SET diary_list = diary_list || '${JSON.stringify(req.body.diary)}' ::jsonb;`)
    } else {
      await pool.query(`UPDATE ${req.params.username} SET diary_list='[${JSON.stringify(new_diary)}]';`)
      //await pool.query(`UPDATE ${req.params.username} SET diary_list='[${JSON.stringify(req.body.diary)}]';`)
    }
    res.status(201).send('Updated diary list')
  }catch (error){
    res.status(500).send(error)
  }
})
.put((req,res) => {

})
.delete(async (req,res) => {
  try{
    const diary_position = await findDiaryPositionById(req.body.id, req.params.username)
    await pool.query(`UPDATE ${req.params.username} SET diary_list = diary_list - ${diary_position};`)
    res.status(201).send('Updated diary list')
  }catch (error){
    res.status(500).send(error)
  }
})


module.exports = router