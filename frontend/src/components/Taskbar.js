import React, { useContext } from 'react'
import { UserContext } from './App'
import { GrAdd } from 'react-icons/gr'

const Taskbar = () => {
  const { userName } = useContext(UserContext)

  return (
    <div className='taskbar'>  
      <div className='date-navigation'>
        <div className='date-navigation__month'>June</div>
        <div className='date-navigation__divider'>|</div>
        <div className='date-navigation__year'>2022</div>
      </div>
      <div className="taskbar-btn">
        <button className='add-diary-btn btn btn-primary'>&#43;</button>
        <button className='user-link btn btn-primary'>{userName.charAt(0).toUpperCase()}</button>
      </div>
    </div>
  )
}

export default Taskbar