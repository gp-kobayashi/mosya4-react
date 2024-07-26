import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MainItems } from '../components/MainItems'
import Link from 'next/link'


export default function Products() {
  const ITEMS =[{img:'img/item1.jpg',page:'/item1'},{img:'img/item2.jpg',page:'/item2'},
    {img:'img/item3.jpg',page:'/item3'},{img:'img/item4.jpg',page:'/item4'},
    {img:'img/item5.jpg',page:'/item5'},{img:'img/item6.jpg',page:'/item6'},
    {img:'img/item7.jpg',page:'/item7'},{img:'img/item8.jpg',page:'/item8'},
    {img:'img/item9.jpg',page:'/item9'},{img:'img/item10.jpg',page:'/item10'},
    {img:'img/item11.jpg',page:'/item11'},{img:'img/item12.jpg',page:'/item12'},
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
      <p>1</p>
      
      <Link href="/products2">
      <p>2</p>
      </Link>
      </div>

      </main>

      <Footer />
    </div>
  )
}
