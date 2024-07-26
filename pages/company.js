import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'



export default function company() {

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Products|Furniture Design</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.company}>
          <p>Company</p>
          <div className={styles.companyList}>
            <div className={styles.listItem}>
              <div className={styles.listTitle}></div>
              <div className={styles.listText}></div>
            </div>
            <div className={styles.listItem}>
              <div className={styles.listTitle}></div>
              <div className={styles.listText}></div>
            </div>
            <div className={styles.listItem}>
              <div className={styles.listTitle}></div>
              <div className={styles.listText}></div>
            </div>
            <div className={styles.listItem}>
              <div className={styles.listTitle}></div>
              <div className={styles.listText}></div>
            </div>
            <div className={styles.listItem}>
              <div className={styles.listTitle}></div>
              <div className={styles.listText}></div>
            </div>
            <div className={styles.listItem}>
              <div className={styles.listTitle}></div>
              <div className={styles.listText}></div>
            </div>
          </div>
      </div>
      </main>

      <Footer />
    </div>
  )
}