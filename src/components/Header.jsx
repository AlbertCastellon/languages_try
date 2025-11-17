

function Header() {
    const changeLanguage = (event) => {
    setLanguage(event.target.value);
  }
    return (
        <header>
        <label htmlFor="language">Select a Language:</label>
        <select name="language" id="language" value={language} onChange={changeLanguage}>
          <option value="cat">Catalan</option>
          <option value="es">Spanish</option>
          <option value="en">English</option>
        </select>
      </header>
    )
}

export default Header