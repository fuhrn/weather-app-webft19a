import React from 'react';
import styles from './SearchBar.module.css'
import {IoSearchOutline} from "react-icons/io5";

export default function SearchBar({onSearch}) {
    // acá va tu código

    function handleOnSearch() {
        if (typeof onSearch === 'function') {
            const input = document.getElementById("search-bar-input");
            onSearch(input.value);
        }
    }

    return (
        <div className={styles.searchBar}>
            <input
                id="search-bar-input"
                type="text"
                placeholder='Ciudad...'
            />
            <button onClick={handleOnSearch}><IoSearchOutline /></button>
        </div>
    )
};
