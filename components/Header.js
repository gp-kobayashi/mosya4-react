import Link from 'next/link';
import styles from 'components/Header.module.css';
import { useState } from 'react';




export function Header() {
  const [isActive, setIsActive] = useState(false)
  const handleDisplay = () => {
    setIsActive((isActive) => !isActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_conteinar}>
        <Link href='/'>
          <img src='/img/logo.svg' />
        </Link>
        <div onClick={handleDisplay} className={`${styles.header_btn} ${isActive ? styles.active : ""}`}>
          <i></i>
          <i></i>
        </div>
      </div>
      <div className={`${styles.header_menu} ${isActive ? styles.active : ""}`}>
        <div className={`${styles.header_bg} ${isActive ? styles.active : ""}`}>
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