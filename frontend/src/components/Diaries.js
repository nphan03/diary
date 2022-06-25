import React, { useContext } from 'react'
import { DiaryContext } from './App'

const Diaries = () => {
  const { diaryList } = useContext(DiaryContext)
  
  return (
    <>
    {diaryList.map(diary => <div key={diary.diary_id} >{diary.diary_text}</div>)}
    </>   
  )
}

export default Diaries