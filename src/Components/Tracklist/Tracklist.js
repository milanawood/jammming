import React, { useState, useEffect } from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";
function Tracklist(props) {
    const [isLoading, setIsLoading] = useState(true);
    const searchResults = props.userSearchResults || [];
    console.log("Mapping over searchResults:", searchResults);
    useEffect(() => {
        // Fetch data here (e.g., using axios, fetch, etc.)
        // Once data is fetched, setIsLoading(false);
        // For now, let's simulate a delay:
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }, []);
  return (
    <div className={styles.Tracklist}>
      {props.userSearchResults.map(track => {
                // Log each track object to the console
                //console.log('Track:', track);

                // Return the Track component for each track
                return (
        <Track 
        track={track}
        key={track.id}
        name={track.name}
        artist={track.artist}
        album={track.album}
        isRemoval={props.isRemoval}
        onAdd={props.onAdd}
        onRemove={props.onRemove}
        />
        );
                })}
    </div>
  );
  }


export default Tracklist;