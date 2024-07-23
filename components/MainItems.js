import styles from '../styles/Home.module.css'

export function MainItems() {

  const ITEMS =[{img1:'img/item1.jpg',img2:'img/item2.jpg',img3:'img/item3.jpg',img4:'img/item4.jpg'},
    {img1:'img/item5.jpg',img2:'img/item6.jpg',img3:'img/item7.jpg',img4:'img/item8.jpg'}
    ]


  return (
        <div className={styles.mainItens}>
        {ITEMS.map(item =>{
          return(
            <div className={styles.mainContainer}>
            <div className={styles.flexItems}>
              <div className={styles.item}>
                <img src={item.img1}/>
                <p>プロダクトタイトルプロダクトタイトル</p>
                <p>¥99,999 +tax</p>
              </div>
              <div className={styles.item}>
                <img src={item.img2}/>
                <p>プロダクトタイトルプロダクトタイトル</p>
                <p>¥99,999 +tax</p>
              </div>
            </div>
            <div className={styles.flexItems}>
              <div className={styles.item}>
                <img src={item.img3}/>
                <p>プロダクトタイトルプロダクトタイトル</p>
                <p>¥99,999 +tax</p>
              </div>
              <div className={styles.item}>
                <img src={item.img4}/>
                <p>プロダクトタイトルプロダクトタイトル</p>
                <p>¥99,999 +tax</p>
              </div>
            </div>
          </div> 
          )
        })}
        </div>

  )
}