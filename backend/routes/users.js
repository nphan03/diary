const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const pool = require('../database/db')

const createNewUser = async (username, password) => {
  try {  
  await pool.query(`
    CREATE TABLE IF NOT EXISTS ${username} (
    diary_id SERIAL PRIMARY KEY,
    diary_username VARCHAR(100) NOT NULL,
    diary_password TEXT NOT NULL,
    diary_list  JSON
    )
  `)
      
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)

  await pool.query(`
    INSERT INTO ${username} (diary_username, diary_password)
    VALUES ('${username}', '${hashedPassword}')
  `)
  }catch(error) {
      return error
  }
}

const ifUserExists =  async (username) => {
  try{
    const result = await pool.query(`
    SELECT 1 FROM information_schema.tables
    WHERE table_schema = 'public' AND table_name = '${username}';
    `)

    return result.rowCount == 1

  }catch (error){
    return error
  }
}

const checkUserAuthenticate = async (username, password) => {
  try{
    const retrievedPassword = await pool.query(`
      SELECT diary_password FROM '${username}';
    `)

    const isUserAutenticated = bcrypt.compare(password, retrievedPassword)
    return isUserAutenticated
  }catch (error){
    return error
  }
}

router.route('/login')
.get((req,res) => {
  //display template to enter username and password
})
.post(async (req,res) => {
  // find user
  if(await ifUserExists(req.body.username)) {
    if(await checkUserAuthenticate(req.body.password)) res.redirect(`http://localhost:3000/${req.body.username}`)
  }else{
    
    res.redirect(`http://localhost:3000/signup`)
  }
  
    //if user does not exit create newuser_diary (table) in database
  // res.send()
  //redirect to http://localhost:3000/newUser
 
})
.put((req,res) => {

})
.delete((req,res) => {

})

module.exports = router