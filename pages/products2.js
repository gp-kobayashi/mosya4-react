import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MainItems } from '../components/MainItems'
import { PageLink } from '../components/PageLink'


export default function Products2() {
  const ITEMS =[{img1:'img/item13.jpg',img2:'img/item14.jpg',img3:'img/item15.jpg',img4:'img/item16.jpg'}
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

      <PageLink link={<div className={styles.pageLinkBtn}><p>1</p> <p>2</p></div>}/>
      
      </main>

      <Footer />
    </div>
  )
}
