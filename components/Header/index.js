import styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {

    return (
        <header className={styles.header}>
            <Link href='/'>
                <img className={styles.logo} src='Logos/logoText.svg'></img>
            </Link>

            <div className={styles.nav}>
                <a className={styles.button} href='https://kyberna.cz/'>Web Školy</a>
            </div>
        </header>
    )
}