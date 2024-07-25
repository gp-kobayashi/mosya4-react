import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MainItems } from '../components/MainItems'
import Link from 'next/link'


export default function Products() {
  const ITEMS =[{{img1:'img/item1.jpg',page1:"/item1"},{img2:'img/item2.jpg',page2:"/item2"},{img3:'img/item3.jpg',page3:"/item3"},{img4:'img/item4.jpg',page4:"/item4"}},
    {{img1:'img/item5.jpg',page1:"/item5"},{img2:'img/item6.jpg',page2:"/item6"},{img3:'img/item7.jpg',page3:"/item7"},{img4:'img/item8.jpg',page4:"/item8"}},
    {{img1:'img/item5.jpg',page1:"/item5"},{img2:'img/item6.jpg',page2:"/item6"},{img3:'img/item7.jpg',page3:"/item7"},{img4:'img/item8.jpg',page4:"/item8"}},
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
