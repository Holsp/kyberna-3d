import { useEffect, useState, useRef } from "react"
import styles from "../styles/floorSelect.module.scss"



export default function FloorSelect({ floor, currentFloor, setCurrentFloor }) {

    const shortText = useRef(null);
    const longText = useRef(null);

    useEffect(() => {

        setTimeout(() => {

        },1000)

    }, [currentFloor])


    return (
        <div className={[styles.button, currentFloor === floor && styles.selected].join(' ')} onClick={() => setCurrentFloor(floor)}>
            <p className={[styles.text, floor === currentFloor ? styles.fadeout : styles.fadeintwo].join(' ')} style={{animationFillMode: "forward"}}>{floor}</p>
            <p className={[styles.text, floor === currentFloor ? styles.fadein : styles.display].join(' ')}>{floor}. Patro</p>
        </div>
    )
}