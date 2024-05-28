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
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
      </header>
    <div className={styles.App} >
      <SearchBar />

      <div className={styles["App-Playlist"]}>
        {/* Add search results component*/}
        {/* Add playlist component*/}
      </div>
    </div>
    </div>
  );
}

export default App;
