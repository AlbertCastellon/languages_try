import { useState, useEffect } from 'react'
import './App.css'
import text from "./assets/docs.json"

function App() {
  const [language, setLanguage] = useState("en");
  const changeLanguage = (event) => {
    setLanguage(event.target.value);
  }
  return (
    <>
      <header>
        <label htmlFor="language">Select a Language:</label>
        <select name="language" id="language" value={language} onChange={changeLanguage}>
          <option value="cat">Catalan</option>
          <option value="es">Spanish</option>
          <option value="en">English</option>
        </select>
      </header>
      <h1>{text[language].greeting}</h1>
    </>
  )
}

export default App

//onClick={changeLanguage("cat")}
//          