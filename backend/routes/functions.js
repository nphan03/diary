const pool = require('../database/db')
const bcrypt = require('bcrypt')

const createNewDiariesTable =  async (username, userId) => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS ${username}_diaries (
        diary_id SERIAL PRIMARY KEY,
        diary_owner INT,
        diary_date DATE NOT NULL,
        diary_text TEXT,
        FOREIGN KEY (diary_owner) REFERENCES users(user_id) ON DELETE CASCADE
      );
    `)  
    const isTableCreated = await pool.query(`SELECT to_regclass('${username}_diaries');`)
    
    return isTableCreated.rowCount == 1
  }catch(error) {
    throw error
  }
}

const createNewUser = async (username, password) => {
  try {        
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)

  const userId = await pool.query(`
    INSERT INTO users (user_name, user_password, user_diaries)
    VALUES ('${username}', '${hashedPassword}', '${username}_diaries')
    RETURNING user_id;
  `)

  const diaryCreated = await createNewDiariesTable(username, userId)

  return diaryCreated
  }catch(error) {
      return error
  }
}

const ifUserExists =  async (username) => {
  try{
    const result = await pool.query(`
      SELECT EXISTS (SELECT 1 FROM users WHERE users.user_name='${username}');
    `)
    return result.rows[0].exists

  }catch (error){
    return error
  }
}

const checkUserAuthenticate = async (username, password) => {
  try{
    const retrievedPassword = await pool.query(`
      SELECT user_password FROM users WHERE user_name='${username}';
    `)
    
    const isUserAutenticated = bcrypt.compare(password, retrievedPassword.rows[0].user_password)
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