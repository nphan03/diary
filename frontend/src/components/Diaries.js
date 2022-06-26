import React, { useContext } from 'react'
import { DiaryContext } from './App'
import DiaryCard from './DiaryCard'

const Diaries = () => {
  const { diaryList } = useContext(DiaryContext)

  return (
    <div className='diary-list clearfix'>
      {diaryList.slice(0).reverse().map(diary => <div key={diary.diary_id} className="diary-card"><DiaryCard diary={diary}/></div>)}
    </div>   
  )
}

export default Diaries