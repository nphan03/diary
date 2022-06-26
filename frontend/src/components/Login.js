import React, { useContext } from 'react'
import { UserContext } from './App'


const Login = ({ logIn, authMessage, signUp }) => {
  const { userName, passWord, setUserName, setPassWord } = useContext(UserContext)

  const handleUserNameInputChange = (newUserName) => {
      setUserName(newUserName)
  }

  const handlePassWordInputChange = (newPassWord) => {
    setPassWord(newPassWord)
  }

  return (
    <div className='login'>
      <div className='login-inputs'>
        <label
          htmlFor='username'
          className='login-inputs__label'
        >
        Username
        </label>
        <input 
          type='text' 
          name='username' 
          id='username' 
          className='login-inputs__input'
          required
          value={userName} 
          onChange = {e => handleUserNameInputChange(e.target.value)}
        />

        <label
          htmlFor='password'
          className='login-inputs__label'
        >
        Password
        </label>
        <input 
          type='password' 
          name='password' 
          id='password' 
          className='login-inputs__input' 
          required
          value={passWord}
          onChange = {e => handlePassWordInputChange(e.target.value)}

        />

        <div className='login-message'>{authMessage}</div>

      </div>
      <div className='login-btn'>
        <button className='btn btn--primary' onClick={() => logIn()}>Log In</button>
        <button className='btn btn--primary' onClick={() => signUp()}>Sign Up</button>
      </div>
    </div>
  )
}

export default Login