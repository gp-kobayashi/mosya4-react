import Link from 'next/link';
import styles from './Header.module.css'
import { useState } from 'react'




export function Header() {
    const [isActive,setIsActive]=useState(false)
    const handleDisplay=() =>{
      setIsActive((isActive) => !isActive);
    };

  return (
      <header className={styles.header}>
        <div className={styles.headerItem}>
          <Link href='/'>
          <img src='img/logo.svg'/>
          </Link>
          <div onClick={handleDisplay}  className={`${styles.headerBtn} ${isActive ? styles.active : ""}`}>
            <i></i>
            <i></i>
          </div>
        </div>
        <div className={`${styles.headerMenu} ${isActive ? styles.active : ""}`}>
          <div className={`${styles.headerBg} ${isActive ? styles.active : ""}`}>
            <ul>
              <Link href='/products'>
                <li>PRODUCTS</li>
              </Link>
              <Link href='/about'>
              <li>ABOUT</li>
              </Link>
              <Link href='/company'>
              <li>COMPANY</li>
              </Link>
              <Link href='/'>
              <li>CONTACT</li>
              </Link>
            </ul>
          </div>
        </div>
      </header>           
  )
}