import text from "./assets/docs.json"

function Main() {
    return (
        <h1>{text[language].greeting}</h1>
    )
}

export default Main