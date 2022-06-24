const express = require('express')
const router = express.Router()
const pool = require('../database/db')
const { ifUserExists, checkUserAuthenticate } = require('./functions')

router.route('/login')
.get((req,res) => {
  //display template to enter username and password
})
.post(async (req,res) => {
  // find user
  if(await ifUserExists(req.body.username)) {
    if(await checkUserAuthenticate(req.body.username, req.body.password)) 
      res.redirect(`${process.env.URL}/${req.body.username}`)
    else 
      res.status(500).send('Authentication Fail')
  }else{
    res.status(500).send('Authentication Fail')
  }
  // if user does not exit create newuser(table) in database
  // redirect to http://localhost:3000/newUser
})


module.exports = router