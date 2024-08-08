import Link from 'next/link';
import styles from 'components/PageLink.module.css';

export function PageLink(props) {

  const ITEMS = props.ITEMS;
  const lastPage = Math.ceil(ITEMS.length / 12);
  const lastLink = '/products/' + String(lastPage)
  
  return (
    <div className={styles.page_link}>
      <div className={styles.btn}>
        <Link href='/products/1'>
          <p>1</p>
        </Link>
      </div>

      <div className={styles.btn}>
        <Link href={lastLink}>
          <p>{lastPage}</p>
        </Link>
      </div>
    </div>

  )
}