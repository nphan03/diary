import React, { useContext } from 'react'
import { DiaryContext } from './App'
import DiaryCard from './DiaryCard'

const Diaries = () => {
  const { diaryList, modifyText } = useContext(DiaryContext)


  return (
    <div className='diary-list clearfix'>
      {diaryList.map((diary) => (
          <DiaryCard 
            key={diary.diary_id} 
            diary={diary} 
            modifyText={modifyText}

          />
      ))}

      
    </div>   
  )
}

export default Diaries