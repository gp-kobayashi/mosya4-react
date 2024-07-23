import styles from '../styles/Home.module.css'



export function Footer() {

  return (
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a><p>INSTAGRAM</p></a>
          <a><p>TWITTER</p></a>
          <a><p>FACEBOOK</p></a>
        </div>
        <p>© Furniture Design</p>
      </footer>
  )
}
