import React from "react";
import styles from './SearchResults.module.css';
import Tracklist from "../Tracklist/Tracklist";


function SearchResults(props) {
    console.log('userSearchResults:', props.userSearchResults);
    return (
        <div className={styles.SearchResults}>
        <Tracklist userSearchResults={props.userSearchResults} onAdd={props.onAdd} isRemoval={false} />
      </div>
        );
}

export default SearchResults;