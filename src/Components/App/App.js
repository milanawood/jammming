import React from "react";
import styles from "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Track from "../Track/Track";
import Tracklist from "../Tracklist/Tracklist";

function App() {
  return (
    <div>
      <header className={styles.highlight}>
        <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
      </header>
    <div className="App" >
      <SearchBar />

      <div className={styles["App-playlist"]}>
        {/* Add search results component*/}
        <SearchResults />
        {/* Add playlist component*/}
        <Playlist />
      </div>
    </div>
    </div>
  );
}

export default App;
