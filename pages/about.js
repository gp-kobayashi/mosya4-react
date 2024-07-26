import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Link from 'next/link'
import { ItemExplain } from '../components/ItemExplain'



export default function item1() {

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Products|Furniture Design</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.about}>
       <p>About</p>
       <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト
         テキストテキストテキストテキストテキストテキストテキストテキストテキスト 
         テキストテキストテキストテキストテキストテキストテキストテキストテキスト 
         テキストテキストテキストテキストテキストテキストテキストテキストテキスト 
         テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
       <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト 
        テキストテキストテキストテキストテキストテキストテキストテキストテキスト 
        テキストテキストテキストテキストテキストテキストテキストテキストテキスト 
        テキストテキストテキストテキストテキストテキストテキストテキストテキスト 
        テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}