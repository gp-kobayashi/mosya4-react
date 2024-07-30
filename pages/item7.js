import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { ItemExplain } from '../components/ItemExplain'
import { Layout } from '../components/Layout'


export default function item7() {

  

  return (
    <Layout>
        <ItemExplain  page={6}/>

      <div className={styles.pageLinkBtn}>
        <Link href="/products">
          <p>Back To Products</p>
        </Link>
      </div>

      </Layout>
  )
}