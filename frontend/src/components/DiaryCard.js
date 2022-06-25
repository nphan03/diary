import React from 'react'

const DiaryCard = ({ diary }) => {
  return (
    <>
      <div className='diary-card__text'>
        <textarea value={diary.diary_text}></textarea>
      </div>
      
      <div className='diary-card__date'>Fri, June 21, 2022</div>
      
      <div className='diary-card__btn'>
        <button className='btn diary-card__btn__remove'>&#x2715;</button>
        <button className='btn diary-card__btn__minimize'>&#8722;</button>
      </div>
    </>
  )
}

export default DiaryCard