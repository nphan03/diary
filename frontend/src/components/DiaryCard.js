import React from 'react'

const DiaryCard = ({ diary }) => {
  const date = new Date(`${diary.diary_date}`).toDateString()
  const formateddate = date.slice(0,3) + ', ' + date.slice(4)

  return (
    <>
      <div className='diary-card__text'>
        <textarea value={diary.diary_text}></textarea>
      </div>
      
      <div className='diary-card__date'>{formateddate}</div>
      
      <div className='diary-card__btn'>
        <button className='btn diary-card__btn__remove'>&#x2715;</button>
        <button className='btn diary-card__btn__minimize'>&#8722;</button>
      </div>
    </>
  )
}

export default DiaryCard