import React , { useState  }  from 'react'
import Login from './Login'
import axios from 'axios'
import Homepage from './Homepage'

export const UserContext = React.createContext()
export const DiaryContext = React.createContext()

const App = () => {
  const [authMessage, setAuthMessage] = useState('')
  const [userName, setUserName] = useState('')
  const [passWord, setPassWord] = useState('')
  const [diaryList, setDiaryList] = useState()
  
  const logIn = () => {
    setAuthMessage('')
    axios.post('http://localhost:3000/login', 
    {
      username: userName,
      password: passWord
    })
    .then(serverResponse => {
      if (serverResponse.data === 'Authentication Fail') throw serverResponse.data 
      setDiaryList(serverResponse.data)
    })
    .catch(err => {
      setPassWord('')
      setAuthMessage(err)
    })
  }

  const signUp = () => {
    setAuthMessage('')
    axios.post('http://localhost:3000/signup', 
    {
      username: userName,
      password: passWord
    })
    .then(serverResponse => {
      if (serverResponse.data === 'User existed') throw serverResponse.data
      setDiaryList(serverResponse.data)
    })
    .catch(err => {
      setPassWord('')
      setAuthMessage(err)
    })
  }

  const addDiary = () => {
    const diary = {
      diary_username: userName,
      diary_text: '',
      diary_date: (new Date()).toLocaleDateString("en-US", 
      { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      })
    }

    axios.post(`http://localhost:3000/${diary.diary_username}`, diary)
    .then(serverResponse => {
      if(serverResponse.status !== 500) setDiaryList([...diaryList, serverResponse.data.rows[0]])
      else throw serverResponse.data
    })
    .catch(err => {
      console.log(err)
    })
  }

  const userContextValue = {
    userName,
    passWord,
    setUserName,
    setPassWord  
  }

  const diaryContextValue = {
    diaryList,
    addDiary
  }
  
  return (
    <UserContext.Provider value={userContextValue}>
    {
      !diaryList ? 
      <Login logIn={logIn} authMessage={authMessage} signUp={signUp} /> : 
      <DiaryContext.Provider value={diaryContextValue}>
        <Homepage />
      </DiaryContext.Provider>
    }
    </UserContext.Provider >
    
  )
}

export default App;