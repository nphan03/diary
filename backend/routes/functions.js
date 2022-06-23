const pool = require('../database/db')
const bcrypt = require('bcrypt')

const createNewUser = async (username, password) => {
  try {  
  await pool.query(`
    CREATE TABLE IF NOT EXISTS ${username} (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password TEXT NOT NULL,
    diary_list  JSONB
    )
  `)
      
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)

  const result = await pool.query(`
    INSERT INTO ${username} (username, password)
    VALUES ('${username}', '${hashedPassword}');
  `)

  return result
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
      SELECT password FROM ${username};
    `)

    const isUserAutenticated = bcrypt.compare(password, retrievedPassword.rows[0].password)
    return isUserAutenticated
  }catch (error){
    return error
  }
}

module.exports = {
  createNewUser,
  ifUserExists,
  checkUserAuthenticate
}