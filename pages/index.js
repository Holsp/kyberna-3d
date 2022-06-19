import Head from 'next/head'
import Image from 'next/image'
import PanoramaView from '../components/PanoramaView'
import styles from '../styles/Home.module.css'
import Skola from './skola'
import Header from '../components/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;800&display=swap" rel="stylesheet" />
      </Head>

      <Header />


      <h1>360° PROHLÍDKA UČEBEN</h1>
      <div className='selection'>
        <Link href='/skola'>
          <a className='button-main' href=''>
            ŠKOLA
          </a>
        </Link>

        <div className='divider'></div>
        <a className='button-main' href=''>
          INTERNÁT
        </a>
      </div>
      {/*<PanoramaView/>*/}

    </div>
  )
}
