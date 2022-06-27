import React, { useContext } from 'react'
import { DiaryContext } from './App'
import DiaryCard from './DiaryCard'

const Diaries = () => {
  const { diaryList, modifyText } = useContext(DiaryContext)

  return (
    <div className='diary-list clearfix'>
      {diaryList.map((diary) => (
        <div 
          key={diary.diary_id} 
          className="diary-card"
        >
          <DiaryCard 
            diary={diary} 
            modifyText={modifyText}
          />
        </div>
      ))}
    </div>   
  )
}

export default Diaries