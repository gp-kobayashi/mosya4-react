import styles from '../styles/Home.module.css'
import { MainItems } from '../components/MainItems'
import { Layout } from '../components/Layout'
import Link from 'next/link'

export default function Products2() {
  const ITEMS =[{img:'img/item13.jpg',page:'/item13'},{img:'img/item14.jpg',page:'/item14'},
    {img:'img/item15.jpg',page:'/item15'},{img:'img/item16.jpg',page:'/item16'},
  ]

  return (
    <Layout>
        
      <div className={styles.mainTitle}>
        <p>Products</p>
      </div>

      <MainItems ITEMS={ITEMS}/>

     <div className={styles.pageLinkBtn}>
      <Link href="/products">
       <p>1</p>
      </Link>
      <p>2</p>
      </div>
      
      </Layout>
  )
}
