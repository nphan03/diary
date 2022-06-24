import React from 'react'

const Diaries = ({ diaryList }) => {

  return (
    <>
    {diaryList.map(diary => <div key={diary.diary_id} >{diary.diary_text}</div>)}
    </>   
  )
}

export default Diaries