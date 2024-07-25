import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Link from 'next/link'



export default function item1() {

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Products|Furniture Design</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
      <div className={styles.itemPege}>
        <p>プロダクトタイトル</p>
        <div className={styles.itemExplain}>
        <div className={styles.itemImg}>
            <img src='img/item1.jpg'/>
        </div>
        <div className={styles.itemText}>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <p>¥99,999 +tax</p>
            <p>
            SIZE：W999 × D999 × H999<br/>
            COLOR：テキスト<br/>
            MATERIAL：テキストテキストテキスト<br/>
            </p>
        </div>
        </div>
      </div>

      <div className={styles.pageLinkBtn}>
        <Link href="/products">
          <p>Back To Products</p>
        </Link>
      </div>

      </main>

      <Footer />
    </div>
  )
}