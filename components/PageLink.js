import Link from 'next/link';
import styles from 'components/PageLink.module.css';

export function PageLink(props) {

  const ITEMS = props.ITEMS;
  const nowPage =props.PAGE;
  const lastPage = Math.ceil(ITEMS.length / 12);
  
  const nextPage = nowPage + 1;
  if (nowPage == lastPage) {
    nextPage - 1;
  };
  const backPage = nowPage - 1;
  if (nowPage == 1) {
    backPage + 1;
  };

  const nextLink = '/products/' + nextPage;
  const backLink = '/products/' + backPage;


  return (
    <div className={styles.page_link}>
      <div className={styles.btn}>
        <Link href={backLink}>
          <p>{backPage}</p>
        </Link>
      </div>
      <div className={styles.btn}>
        <Link href={nextLink}>
          <p>{nextPage}</p>
        </Link>
      </div>
    </div>
  )
}