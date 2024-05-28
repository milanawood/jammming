import React, { useState, useEffect } from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

function Playlist(props) {
    const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={styles.Playlist}>
      <input defaultValue={styles["New Playlist"]} />
      <Tracklist playlistName={props.playlistName} playlistTracks={props.playlistTracks}/>
      <button className={styles["Playlist-save"]}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;