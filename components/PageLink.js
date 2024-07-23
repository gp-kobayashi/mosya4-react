import styles from '../styles/Home.module.css'



export function PageLink(props) {

  return (
        <div className={styles.pageLink}>
          {props.link}
        </div>
  )
}