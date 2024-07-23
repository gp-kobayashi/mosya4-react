import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MainItems } from '../components/MainItems'
import { PageLink } from '../components/PageLink'


export default function Home() {

  
  const ITEMS =[{img1:'img/item1.jpg',img2:'img/item2.jpg',img3:'img/item3.jpg',img4:'img/item4.jpg'},
    {img1:'img/item5.jpg',img2:'img/item6.jpg',img3:'img/item7.jpg',img4:'img/item8.jpg'}
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

      <PageLink link={<p>View More</p>}/>
        
      </main>

      <Footer />
    </div>
  )
}
