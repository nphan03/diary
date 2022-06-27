import React, { useContext } from 'react'
import { DiaryContext } from './App'

const Modal = ({ open, setIsOpen, date, id }) => {
  const { handleDeleteDiary } = useContext(DiaryContext)
  
  if(!open) return null
  return (
    <div className='dangerModal'>
    <div>This action can't be reversed. Are you sure you want to delete your diary on {date} </div>
      <button className='btn btn-danger' onClick={() => {
        handleDeleteDiary(id)
        setIsOpen(false)
      }}>YES</button>
      <button className='btn'>NO</button>
    </div>
  )
}

export default Modal