import React from 'react';

export default function SearchBar({onSearch}) {
    // acá va tu código

    function handleOnSearch() {
        if (typeof onSearch === 'function') {
            const input = document.getElementById("search-bar-input");
            onSearch(input.value);
        }
    }

    return (
        <div>
            <input
                id="search-bar-input"
                type="text"
                placeholder='Ciudad...'
            />
            <button onClick={handleOnSearch}>Agregar</button>
        </div>
    )
};
