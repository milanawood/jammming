import React from "react";
import styles from "./Track.module.css";

function Track(props) {
    function renderAction() {
        if (props.isRemoval) {
            return (
                <button className={styles["Track-action"]} onClick={passTrack}>+</button>
            );
        } else {
            return <button className={styles["Track-action"]}>-</button>
        }
    }

    function passTrack() {
        props.onAdd(props.tracks);
    }
    return (
        <div className={styles.Track}>
            <div className={styles["Track-information"]}>
                <h3>{props.name}</h3>
                <p>
                    {props.artist} | {props.album}
                </p>
            </div>
            {renderAction()}
        </div>
    );
}

export default Track;