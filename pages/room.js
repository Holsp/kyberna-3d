import { useRouter } from "next/router";
import Image from "next/image";
import PanoramaView from "../components/PanoramaView";
import Link from "next/dist/client/link";
import styles from "../styles/room.module.scss";

export default function Room() {

    const router = useRouter();
    const data = router.query;

    console.log("Page: " + data.data);

    return (
        <div>
            <div className={styles.buttonWrapper}>
                <Link href="/skola">
                    <a className={styles.button}>
                        <img className={styles.img} src="/backArrow/background.svg" />
                        <img className={styles.img} src="/backArrow/arrow.svg" />

                    </a>
                </Link>
            </div>

            {/*<h1>{data.data}</h1>*/}
            {data.data && <PanoramaView data={data.data} />}

        </div>
    )
}