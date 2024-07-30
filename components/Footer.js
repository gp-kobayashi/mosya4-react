import styles from './Footer.module.css';



export function Footer() {

  return (
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href='https://www.instagram.com/'><p>INSTAGRAM</p></a>
          <a href='https://x.com/'><p>TWITTER</p></a>
          <a href='https://www.facebook.com/'><p>FACEBOOK</p></a>
        </div>
        <p>© Furniture Design</p>
      </footer>
  )
}
