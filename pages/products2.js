import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MainItems } from '../components/MainItems'

import Link from 'next/link'

export default function Products2() {
  const ITEMS =[{img:'img/item13.jpg',page:'/item13'},{img:'img/item14.jpg',page:'/item14'},
    {img:'img/item15.jpg',page:'/item15'},{img:'img/item16.jpg',page:'/item16'},
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Products|Furniture Design</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
      
      <MainItems ITEMS={ITEMS}/>

     <div className={styles.pageLinkBtn}>
      <Link href="/products">
       <p>1</p>
      </Link>
      <p>2</p>
      </div>
      
      </main>

      <Footer />
    </div>
  )
}
