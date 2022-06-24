import React , { useState  }  from 'react'
import Login from './Login'
import axios from 'axios'
import Diaries from './Diaries'

export const UserContext = React.createContext()

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
    setUserName,
    setPassWord  
  }
  
  return (
    <UserContext.Provider value={userContextValue}>
     {diaryList ? <Diaries diaryList={diaryList}/> : <Login logIn={logIn} authMessage={authMessage} />} 
    </UserContext.Provider>
  )
}

export default App;