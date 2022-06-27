import React, { useState } from 'react'
import Modal from './Modal'

const DiaryCard = ({ diary, modifyText }) => {
  const [isOpen, setIsOpen] = useState(false)


  const date = new Date(`${diary.diary_date}`).toDateString()
  const formateddate = date.slice(0,3) + ', ' + date.slice(4)

  const handleTextChange = (text) => {
    const change = { diary_text: text}
    modifyText(diary.diary_id, {...diary, ...change})
  }

  return (
    <>
      <div className='diary-card__text'>
        <textarea 
          value={diary.diary_text}
          onChange={(e) => handleTextChange(e.target.value)}
        ></textarea>
      </div>
      
      <div className='diary-card__date'>{formateddate}</div>
      
      <div className='diary-card__btn'>
        <button className='btn diary-card__btn__remove' onClick={() => setIsOpen(true)}>&#x2715;</button>
        <button className='btn diary-card__btn__minimize'>&#8722;</button>
      </div>

      <Modal 
        open={isOpen} 
        setIsOpen={setIsOpen} 
        date={formateddate}
        id={diary.diary_id}
      />
    </>
  )
}

export default DiaryCard