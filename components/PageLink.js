import styles from '../styles/Home.module.css'



export function PageLink(props) {

  return (
        <div className={styles.pageLinkBtn}>
          <p>{props.link1}</p>
          <p>{props.link2}</p>
        </div>
  )
}