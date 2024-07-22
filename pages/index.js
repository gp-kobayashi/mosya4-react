import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'



export default function Home() {

  const ITEMS =[{img1:'img/item1.jpg',img2:'img/item2.jpg',img3:'img/item3.jpg',img4:'img/item4.jpg'},
    {img1:'img/item5.jpg',img2:'img/item6.jpg',img3:'img/item7.jpg',img4:'img/item8.jpg'},
    {img1:'img/item9.jpg',img2:'img/item10.jpg',img3:'img/item11.jpg',img4:'img/item12.jpg'}]



  return (
    <div className={styles.container}>
      <Head>
        <title>Products|Furniture Design</title>
        <link rel="icon" href="img/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src='img/logo.svg'/>
        <div className={styles.headerBtn}>
          <i></i>
          <i></i>
        </div>
      </header>
      <main className={styles.main}>
      <div className={styles.headerMenu}>
          <div className={styles.headerBg}>
            <ul>
              <li>PRODUCTS</li>
              <li>ABOUT</li>
              <li>COMPANY</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
        <p>Products</p>
        {ITEMS.map(item =>{
          return(
            <div className={styles.mainContainer}>
            <div className={styles.flexItems}>
              <div className={styles.item}>
                <img src={item.img1}/>
                <p>プロダクトタイトルプロダクトタイトル</p>
                <p>¥99,999 +tax</p>
              </div>
              <div className={styles.item}>
                <img src={item.img2}/>
                <p>プロダクトタイトルプロダクトタイトル</p>
                <p>¥99,999 +tax</p>
              </div>
            </div>
            <div className={styles.flexItems}>
              <div className={styles.item}>
                <img src={item.img3}/>
                <p>プロダクトタイトルプロダクトタイトル</p>
                <p>¥99,999 +tax</p>
              </div>
              <div className={styles.item}>
                <img src={item.img4}/>
                <p>プロダクトタイトルプロダクトタイトル</p>
                <p>¥99,999 +tax</p>
              </div>
            </div>
          </div> 
          )
        })}
        <div className={styles.pageLinkBtn}>
          <p>1</p>
          <p>2</p>
        </div>
        
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a><p>INSTAGRAM</p></a>
          <a><p>TWITTER</p></a>
          <a><p>FACEBOOK</p></a>
        </div>
        <p>© Furniture Design</p>
      </footer>
    </div>
  )
}
