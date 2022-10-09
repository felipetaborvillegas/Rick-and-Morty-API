import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/header.scss";

export function Header () {
    
    const [darkMode, setDarkMode] = useContext(ThemeContext);

    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    return(
        <div className="Header">
            <h1>Rick and Morty characters</h1>
            <button type="button" onClick={handleClick} >
                {darkMode?"Light-Mode":"Dark-Mode"}
            </button>
        </div>
    );
}