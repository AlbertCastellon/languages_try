import { createContext, useContext, useState } from "react";

const MyContext = createContext()

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('en')
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage)
    }
    return (
        <MyContext.Provider value={{language, changeLanguage}}>
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext = () => useContext(MyContext)