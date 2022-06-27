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

  const modifyText = (diary_id, diary) => {

    axios.put(`http://localhost:3000/${userName}`,{
      diary_id,
      newText: diary.diary_text
    })
    .then(serverResponse => {
      if (serverResponse.data !== 'Updated diary') throw serverResponse.data
      else {
        const newDiaryList = [...diaryList]
        const index = newDiaryList.findIndex(d => d.diary_id === diary_id)
        newDiaryList[index] = diary
        setDiaryList(newDiaryList)
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  
  const handleDeleteDiary = (delete_id) => {
    console.log(delete_id)
    axios.delete(`http://localhost:3000/${userName}`, {data: {id: delete_id}})
    .then(serverResponse => {
      if (serverResponse.data !== 'Updated diary list') throw serverResponse.data
      else {
        setDiaryList(diaryList.filter(d => d.diary_id !== delete_id))
      }
    })
    .catch(err => {
      console.log(err)
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
    addDiary,
    modifyText, 
    handleDeleteDiary
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