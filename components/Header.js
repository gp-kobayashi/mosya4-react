import styles from '../styles/Home.module.css'
import { useState } from 'react'




export function Header() {
    const [isActive,setIsActive]=useState(false)
    const handleDisplay=() =>{
      setIsActive((isActive) => !isActive);
    };

  return (
      <header className={styles.header}>
        <img src='img/logo.svg'/>
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