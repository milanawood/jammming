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

  const [playlistName, setPlaylistName] = useState("My Playlist")

  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "She's Like a Song",
      artist: "Tim Wood",
      album: "UK-CA=UK-CA",
      id: 4
    },
    {
      name: "Secondhand Smoke",
      artist: "Tim Wood",
      album: "UK-CA=UK-CA",
      id: 5
    },
    {
      name: "Rollin' On",
      artist: "Tim Wood",
      album: "UK-CA=UK-CA",
      id: 6
    },
    {
      name: "Number One Fan",
      artist: "Tim Wood",
      album: "UK-CA=UK-CA",
      id: 7
    }
  ]);
  
  function addTrack(track) {
    const existingTrack = playlistTracks.find((t) => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
    if (existingTrack) {
      console.log("Track already exists");
    } else {
      setPlaylistTracks(newTrack);
    }
  };

  function removeTrack(track) {
    const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(existingTrack);
  };


  return (

    <div>
      <header className={styles.highlight}>
        <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
      </header>
    <div className={styles.App} >
      <SearchBar />

      <div className={styles["App-playlist"]}>
        {/* Add search results component*/}
        <SearchResults 
        userSearchResults={searchResults} 
        onAdd={addTrack} />
        {/* Add playlist component*/}
        <Playlist 
        playlistName={playlistName} 
        playlistTracks={playlistTracks} 
        onRemove={removeTrack}/>
      </div>
    </div>
    </div>
  );
}

export default App;
