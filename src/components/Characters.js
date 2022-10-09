import { useState, useContext, useRef, useCallback } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Search } from "./Search";
import { useCharacter } from "../hooks/useCharacter"
import "../styles/characters.scss"

export function Characters () {
    const URL = "https://rickandmortyapi.com/api/character/";

    const [darkMode] = useContext(ThemeContext);

    const [favorites, setFavorites] = useState([]);

    const [search, setSearch] = useState("");

    const searchInput = useRef(null);

    const handleClick = favorite => {
        if (favorites.includes(favorite.image)) {
            let proxyArray = [];
            favorites.forEach ((images) => {
                if (images !== favorite.image) {
                    proxyArray.push(images)
                }}
            )
            setFavorites(proxyArray);
        }
        else {
            setFavorites([...favorites, favorite.image]);
        }
    }

    const characters = useCharacter(URL);

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value)
    }, [])

    const filteredCharacters = characters.filter(character => {
        return (character.name.toLowerCase().includes(search.toLowerCase()));
    })
    
    const charactersList =  filteredCharacters.map(character => (
        <div className="character-container" key={character.id}>
            <div 
                className="card" 
                style={{
                    backgroundImage: `url(${character.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}> 
                    <p><span>Status:</span> {character.status}</p>
                    <p><span>Species:</span> {character.species}</p>
                    <p><span>Gender:</span> {character.gender}</p>
                    <p><span>Location:</span> {character.location.name}</p>
            </div>
            <div className="bottom-section">
                <h2 className={darkMode?"dark-mode":"light-mode"}>{character.name}</h2>
                <FontAwesomeIcon className={favorites.includes(character.image)?"star star-on":"star"} icon={faStar} onClick={() => handleClick(character)}/>
            </div>
        </div>
    ))

    return(
        <div>
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/>
            <div className="main">
                <div className="favorites">
                    {favorites.length?<h2 className={darkMode?"dark-mode":"light-mode"}>Favorites:</h2>:""}
                    {favorites.map(favorite => (
                        <img key={favorite} src={favorite} alt="character" className="fav-characters"/>
                    ))}
                </div>
                <h2 className={darkMode?"dark-mode all-characters":"light-mode all-characters"}>All characters:</h2>
                <div className="characters">
                    {charactersList}
                </div>
            </div>
        </div>
    );
}