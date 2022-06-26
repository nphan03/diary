import React, { useContext } from 'react'
import { UserContext, DiaryContext } from './App'

const Taskbar = () => {
  const { userName } = useContext(UserContext)
  const { addDiary } = useContext(DiaryContext)

  return (
    <div className="taskbar-btn">
      <button className='add-diary-btn btn btn-primary' onClick={() => addDiary()}>&#43;</button>
      <button className='user-link btn btn-primary'>{userName.charAt(0).toUpperCase()}</button>
    </div>
  )
}

export default Taskbar