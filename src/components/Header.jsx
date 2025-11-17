import { useMyContext } from "../context/MyContext"
import { useState } from "react";

function Header() {
  const {language, changeLanguage} = useMyContext();
    const getLanguage = (event) => {
    changeLanguage(event.target.value);
  }

    return (
        <header>
        <label htmlFor="language">Select a Language:</label>
        <select name="language" id="language" value={language} onChange={getLanguage}>
          <option value="cat">Catalan</option>
          <option value="es">Spanish</option>
          <option value="en">English</option>
        </select>
      </header>
    )
}

export default Header