export function Search ({search, searchInput, handleSearch}) {
    return(
        <input 
            type="text" 
            onChange={handleSearch} 
            value={search}
            placeholder="Search character"
            ref={searchInput}
        />
    );
}