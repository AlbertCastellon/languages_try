import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useContext } from 'react'
import './App.css'
import text from "./assets/docs.json"

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <>
      
      <h1>{text[language].greeting}</h1>
    </>
  )
}

export default App
