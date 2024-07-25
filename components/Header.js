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
        <Link href="/">
        <img src='img/logo.svg'/>
        </Link>
        <div onClick={handleDisplay}  className={`${styles.headerBtn} ${isActive ? styles.active : ""}`}>
          <i></i>
          <i></i>
        </div>
        <div className={`${styles.headerMenu} ${isActive ? styles.active : ""}`}>
          <div className={`${styles.headerBg} ${isActive ? styles.active : ""}`}>
            <ul>
              <li>PRODUCTS</li>
              <li>ABOUT</li>
              <li>COMPANY</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
      </header>           
  )
}