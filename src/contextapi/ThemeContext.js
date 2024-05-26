import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react"

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>
{
    const [ theme, setTheme ] = useState('light');

    const updateTheme = () =>
    {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light');
    }

    return(
        <ThemeContext.Provider value={{theme, updateTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

const UseTheme = () =>
{
    return useContext(ThemeContext);
}

export {ThemeProvider, UseTheme}