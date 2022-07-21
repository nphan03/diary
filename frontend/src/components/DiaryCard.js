import React, { useState } from 'react'
import DangerModal from './DangerModal'

const DiaryCard = ({ diary, modifyText }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [ isClick, setIsClick  ] = useState(false)


  const date = new Date(`${diary.diary_date}`).toDateString()
  const formateddate = date.slice(0,3) + ', ' + date.slice(4)

  const handleTextChange = (text) => {
    const change = { diary_text: text}
    modifyText(diary.diary_id, {...diary, ...change})
  }

  return (
    <div className={isClick ? 'isClicked diary-card' : 'diary-card'}>
      <div className='diary-card__text'>
        <textarea
          placeholder='What are you thinking?' 
          value={diary.diary_text}
          onChange={(e) => handleTextChange(e.target.value)}
        ></textarea>
      </div>

      <div 
        className='diary-card__date'  onClick={() => setIsClick(true)}>{formateddate}</div>
      
      <div className='diary-card__btn'  onClick={() => setIsClick(true)}>
        <button className='btn diary-card__btn__remove' onClick={() => setIsOpen(true)}>&#x2715;</button>
        <button className='btn diary-card__btn__minimize'>&#8722;</button>
      </div>

      <DangerModal 
        open={isOpen} 
        setIsOpen={setIsOpen} 
        date={formateddate}
        id={diary.diary_id}
      />
    </div>
  )
}

export default DiaryCard