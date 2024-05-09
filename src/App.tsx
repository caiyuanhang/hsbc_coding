/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo } from "react"

import './App.css'

function App () {
  const [currTime, setCurrTime] = useState<string>()
  const [isCreateOtherTime, setIsCreateOtherTime] = useState<boolean>(false)

  const getCurrentDate = () => {
    const date = new Date();  

    const year = date.getFullYear();  
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');  
    const hour = String(date.getHours()).padStart(2, '0');  
    const minute = String(date.getMinutes()).padStart(2, '0');   
    const second = String(date.getSeconds()).padStart(2, '0');  
 
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`; 
  }

  useEffect(() => {
    onRefreshTime()
  }, [])

  const onRefreshTime = () => {
    const time = getCurrentDate()
    setCurrTime(time)
  }

  const otherTime = useMemo(() => isCreateOtherTime && getCurrentDate(), [isCreateOtherTime])

  return (
    <div>
      <h1 className="name">Darren CAI 蔡沅航</h1>
      <p className="time">
        <span>{currTime}</span>
        <button onClick={() => onRefreshTime()}>refresh time</button>
      </p>
      <p className="time">
        <span>{otherTime}</span>
        <button onClick={() => setIsCreateOtherTime(true)}>create other time</button>
      </p>
    </div>
  )
}

export default App
