import React, { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Track from "../Track/Track";
import Tracklist from "../Tracklist/Tracklist";

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: "Sons & Daughters",
      artist: "Tim Wood",
      album: "Timing is Everything",
      id: 1,
    },
    {
      name: "Animal Silhouettes",
      artist: "Vivienne Wood",
      album: "4 and Fabulous",
      id: 2,
    },
    {
      name: "Midnight Strangers",
      artist: "Max Wood",
      album: "Tiny Temper",
      id: 3,
    }
  ]);

  return (

    <div>
      <header className={styles.highlight}>
        <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
      </header>
    <div className={styles.App} >
      <SearchBar />

      <div className={styles["App-playlist"]}>
        {/* Add search results component*/}
        <SearchResults userSearchResults={searchResults}/>
        {/* Add playlist component*/}
        <Playlist />
      </div>
    </div>
    </div>
  );
}

export default App;
