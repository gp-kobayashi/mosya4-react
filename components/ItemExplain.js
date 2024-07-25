import styles from '../styles/Home.module.css'


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
            <p>
            SIZE：W999 × D999 × H999<br/>
            COLOR：テキスト<br/>
            MATERIAL：テキストテキストテキスト<br/>
            </p>
        </div>
        </div>
      </div>
  )
}