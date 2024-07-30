import styles from './ItemExplain.module.css'
import Link from 'next/link'

export function ItemExplain(props) {

const IMG =['img/item1.jpg','img/item2.jpg','img/item3.jpg','img/item4.jpg',
  'img/item5.jpg','img/item6.jpg','img/item7.jpg','img/item8.jpg',
  'img/item9.jpg','img/item10.jpg','img/item11.jpg','img/item12.jpg',
  'img/item13.jpg','img/item14.jpg','img/item15.jpg','img/item1.jpg'
]

  return (
      <div className={styles.itemPege}>
        <p>プロダクトタイトル</p>
        <div className={styles.itemExplain}>
            <div className={styles.itemImg}>
              <img src={IMG[props.page]}/>
            </div>
          <div className={styles.itemText}>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              <p>¥99,999 +tax</p>
            <div className={styles.textContainer}>
              <div className={styles.title}>SIZE：</div>
              <div className={styles.text}>W999 × D999 × H999</div>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.title}>COLOR：</div>
              <div className={styles.text}>テキスト</div>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.title}>MATERIAL：</div>
              <div className={styles.text}>テキストテキストテキスト</div>
            </div>
            
          </div>
        </div>
        <div className={styles.pageLinkBtn}>
        <Link href="/products">
          <p>Back To Products</p>
        </Link>
      </div>
      </div>
      
  )
}