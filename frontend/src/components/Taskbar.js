import React, { useContext } from 'react'
import { UserContext } from './App'

const Taskbar = () => {
  const { userName } = useContext(UserContext)

  return (
    <div className="taskbar-btn">
      <button className='add-diary-btn btn btn-primary'>&#43;</button>
      <button className='user-link btn btn-primary'>{userName.charAt(0).toUpperCase()}</button>
    </div>
  )
}

export default Taskbar