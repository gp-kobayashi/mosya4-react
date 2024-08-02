import styles from 'styles/Home.module.css';
import { MainItems } from 'components/MainItems';
import Link from 'next/link';
import { Layout } from 'components/Layout';

export default function Products() {
  const ITEMS =[{img:'/img/item1.jpg',page:'/item/1',text:'プロダクトタイトルプロダクトタイトル',price:'¥99,999 +tax'},
    {img:'/img/item2.jpg',page:'/item/2',text:'プロダクトタイトルプロダクトタイトル',price:'¥99,999 +tax'},
    {img:'/img/item3.jpg',page:'/item/3',text:'プロダクトタイトルプロダクトタイトル',price:'¥99,999 +tax'},
    {img:'/img/item4.jpg',page:'/item/4',text:'プロダクトタイトルプロダクトタイトル',price:'¥99,999 +tax'},
    {img:'/img/item5.jpg',page:'/item/5',text:'プロダクトタイトルプロダクトタイトル',price:'¥99,999 +tax'},
    {img:'/img/item6.jpg',page:'/item/6',text:'プロダクトタイトルプロダクトタイトル',price:'¥99,999 +tax'},
    {img:'/img/item7.jpg',page:'/item/7',text:'プロダクトタイトルプロダクトタイトル',price:'¥99,999 +tax'},
    {img:'/img/item8.jpg',page:'/item/8',text:'プロダクトタイトルプロダクトタイトル',price:'¥99,999 +tax'},
    {img:'/img/item9.jpg',page:'/item/9',text:'プロダクトタイトルプロダクトタイトル',price:'¥99,999 +tax'},
    {img:'/img/item10.jpg',page:'/item/10',text:'プロダクトタイトルプロダクトタイトル',price:'¥99,999 +tax'},
    {img:'/img/item11.jpg',page:'/item/11',text:'プロダクトタイトルプロダクトタイトル',price:'¥99,999 +tax'},
    {img:'/img/item12.jpg',page:'/item/12',text:'プロダクトタイトルプロダクトタイトル',price:'¥99,999 +tax'}
    ] 
  

  return (
    <Layout>

      <div className={styles.main_title}>
        <p>Products</p>
      </div>
      
      <MainItems ITEMS={ITEMS} />

      <div className={styles.page_link}>
        <p>1</p>
        <Link href='/products2'>
          <p>2</p>
        </Link>
      </div>

    </Layout>
  )
}
