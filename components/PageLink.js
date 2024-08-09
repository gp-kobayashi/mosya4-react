import Link from 'next/link';
import styles from 'components/PageLink.module.css';

export function PageLink(props) {

  const ITEMS = props.ITEMS;
  const nowPage =Number(props.PAGE);
  const lastPage = Math.ceil(ITEMS / 12);
  
  let nextPage = nowPage + 1;
  let backPage = nowPage - 1;

  if (nowPage == lastPage) {
    nextPage -= 1;
  };
  
  if (backPage == 0) {
    backPage += 1;
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