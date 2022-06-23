const express = require('express')
const router = express.Router()

const { createNewUser, ifUserExists } = require('./functions')

router.route('/signup')
.post(async (req,res) => {
  if(await ifUserExists(req.body.username)) {
    res.send('User existed')
  }else{
    const result = await createNewUser(req.body.username, req.body.password)
    if(result.rowCount == 1) {
      res.status(201).redirect(`${process.env.URL}/${req.body.username}`)
    } else {
      res.status(500).send(result)
    }
  }
})


module.exports = router