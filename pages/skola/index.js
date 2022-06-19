import { useEffect, useRef, useState } from "react"
import Header from "../../components/Header"
import styles from "../../styles/Skola.module.scss"
import whiteButton from "../../styles/WhiteButton.module.scss";
import ThirdFloor from "../../public/floors/planSvg2"
import Link from "next/dist/client/link";
import Progress from "../../components/progress";
import FloorSelect from "../../components/floorSelect";

export default function Skola() {

    const [floor, setFloor] = useState(3);
    const ref = useRef(null);

    //String to set roomName
    const [roomName, setRoomName] = useState('test');
    const [bottomText, setBottomText] = useState('test')



    useEffect(() => {
        const bottomText = ref.current;
        bottomText.classList.add(styles['fade-class']);

        setTimeout(() => {
            setBottomText(roomName);
        }, 250)

        setTimeout(() => {
            bottomText.classList.remove(styles['fade-class']);
        }, 250)


    }, [roomName])

    return (
        <div className={styles.wrapper}>
            <Header />
            <h1>Škola</h1>
            <div className={styles.floorSelect}>
                <FloorSelect floor={2} currentFloor={floor} setCurrentFloor={setFloor} />
                <FloorSelect floor={3} currentFloor={floor} setCurrentFloor={setFloor} />
                <FloorSelect floor={4} currentFloor={floor} setCurrentFloor={setFloor} />
            </div>

            {/* Different floor rooms */}
            <div className={styles.floors}>
                <ThirdFloor setRoomName={setRoomName} />
            </div>

            {/* Bottom navigation / path to room */}
            <div className={styles.bottomTooltip}>
                <div className={styles.wrapper}>
                    <h2 ref={ref}>{bottomText}</h2>
                </div>
                <div className={styles.wrapper}>
                    <Link href={{
                        pathname: '/room',
                        query: { data: roomName }
                    }}>
                        <a href='' className={whiteButton.button}>Prohlédnout učebnu</a>
                    </Link>
                </div>


            </div>
        </div>
    )
}