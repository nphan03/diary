import React, { useContext } from 'react'
import { DiaryContext } from './App'

const Modal = ({ open, setIsOpen, date, id }) => {
  const { handleDeleteDiary } = useContext(DiaryContext)

  if(!open) return null
  return (
    <div className='dangerModal'>
      <div>This action can't be reversed. Are you sure you want to delete your diary on {date}?</div>
      <div className='dangerModal_button'>
        <button className='btn dangerModal_button_no' onClick={() => setIsOpen(false)}>NO</button>
        <button className='btn dangerModal_button_yes' onClick={() => {
          handleDeleteDiary(id)
          setIsOpen(false)
        }}>YES</button>
      </div>
    </div>
  )
}

export default Modal