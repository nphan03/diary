import React from 'react'
import Diaries from './Diaries'
import Taskbar from './Taskbar'
import Date from './Date'

const Homepage = () => {
  return (
    <>
      <Diaries />
      <Taskbar />
      <Date />
    </>
  )
}

export default Homepage