import styles from './MainItems.module.css'
import Link from 'next/link'

export function MainItems(props) {

  const ITEMS = props.ITEMS

  return (
        <div className={styles.mainItens}>
        {ITEMS.map((item, index) => {
        return (
          <div key={index} className={styles.item}>
            <Link href={item.page}>
              <img src={item.img} />
              <p>プロダクトタイトルプロダクトタイトル</p>
              <p>¥99,999 +tax</p>
            </Link>
          </div>
        )
      })}
        </div>

  )
}