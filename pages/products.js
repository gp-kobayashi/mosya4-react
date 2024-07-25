import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MainItems } from '../components/MainItems'
import Link from 'next/link'


export default function Products() {
  const ITEMS =[{img1:'img/item1.jpg',img2:'img/item2.jpg',img3:'img/item3.jpg',img4:'img/item4.jpg'},
    {img1:'img/item5.jpg',img2:'img/item6.jpg',img3:'img/item7.jpg',img4:'img/item8.jpg'},
    {img1:'img/item9.jpg',img2:'img/item10.jpg',img3:'img/item11.jpg',img4:'img/item12.jpg'}
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
