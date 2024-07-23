import styles from '../styles/Home.module.css'

export function MainItems(props) {

  const ITEMS = props.ITEMS

  return (
        <div className={styles.mainItens}>
        {ITEMS.map((item,index) =>{
          return(
            <div key={index} className={styles.mainContainer}>
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