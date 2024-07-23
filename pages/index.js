import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MainItems } from '../components/MainItems'


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Products|Furniture Design</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
      
      <MainItems />

        <div className={styles.LinkBtn}>
          <p>View More</p>
        </div>
        
      </main>

      <Footer />
    </div>
  )
}
