import text from "../assets/docs.json"
import { useMyContext } from "../context/MyContext"

function Main() {
    const { language } = useMyContext()
    return (
        <>
            <h1>{text[language].greeting}</h1>
            <h2>{text[language].body}</h2>
        </>
    )
}

export default Main