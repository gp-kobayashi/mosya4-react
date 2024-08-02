import styles from './MainItems.module.css'
import Link from 'next/link'

export function MainItems(props) {

  const ITEMS = props.ITEMS

  return (
        <div className={styles.mainItems}>
          {ITEMS.map((item, index) => {
          return (
            <div key={index} className={styles.item}>
              <Link href={item.page}>
                <img src={item.img} />
                <p>{item.text}</p>
                <p>{item.price}</p>
              </Link>
            </div>
            )
          })}
        </div>

  )
}