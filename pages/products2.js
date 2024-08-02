import styles from '../styles/Home.module.css'
import { MainItems } from '../components/MainItems'
import { Layout } from '../components/Layout'
import Link from 'next/link'

export default function Products2() {
  const ITEMS =[{img:'img/item13.jpg',page:'/item13',text:'プロダクトタイトルプロダクトタイトル',price:'¥99,999 +tax'},
    {img:'img/item14.jpg',page:'/item14',text:'プロダクトタイトルプロダクトタイトル',price:'¥99,999 +tax'},
    {img:'img/item15.jpg',page:'/item15',text:'プロダクトタイトルプロダクトタイトル',price:'¥99,999 +tax'},
    {img:'img/item16.jpg',page:'/item16',text:'プロダクトタイトルプロダクトタイトル',price:'¥99,999 +tax'},
  ]

  return (
    <Layout>
        
      <div className={styles.main_title}>
        <p>Products</p>
      </div>

      <MainItems ITEMS={ITEMS}/>

      <div className={styles.page_link}>
        <Link href='/products'>
          <p>1</p>
        </Link>
        <p>2</p>
      </div>
      
    </Layout>
  )
}
