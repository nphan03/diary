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
      setUserName('')
      setPassWord('')
      setAuthMessage(err)
    })
  }

  const userContextValue = {
    userName,
    setUserName,
    setPassWord  
  }

  const diaryContextValue = {
    diaryList
  }
  
  return (
    <UserContext.Provider value={userContextValue}>
    {
      !diaryList ? 
      <Login logIn={logIn} authMessage={authMessage} /> : 
      <DiaryContext.Provider value={diaryContextValue}>
        <Homepage />
      </DiaryContext.Provider>
    }
    </UserContext.Provider >
    
  )
}

export default App;