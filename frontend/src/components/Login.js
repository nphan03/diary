import React from 'react'

const Login = () => {
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
        />
      </div>
      <div className='login-btn'>
        <button className='btn btn--primary'>Log In</button>
        <button className='btn btn--primary'>Sign Up</button>
      </div>
    </div>
  )
}

export default Login