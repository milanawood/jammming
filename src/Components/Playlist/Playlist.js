import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";


function Playlist(props) {
    function handleNameChange({ target }) {
    props.onNameChange(target.value);
    }
  return (
    <div className={styles.Playlist}>
      <input defaultValue={""} onChange={handleNameChange}/>
      <Tracklist 
      className={styles.Playlist}
      playlistName={props.playlistName} 
      userSearchResults={props.playlistTracks} 
      onRemove={props.onRemove} 
      isRemoval={true}
      />
      <button 
      onClick={props.onSave}
      className={styles["Playlist-save"]}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;