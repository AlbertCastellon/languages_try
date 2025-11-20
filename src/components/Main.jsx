import text from "../assets/docs.json"
import { useMyContext } from "../context/MyContext"

function Main() {
    const { language } = useMyContext()
    return (
        <>
            <h1>{text[language].greeting}</h1>
            {text[language].body.map(element => {
                return(
                <>
                    <h3>{element.title}</h3>
                    <h4>{element.author}</h4>
                    <h4>{element.year}</h4>
                </>
                )
            })}
        </>
    )
}

export default Main