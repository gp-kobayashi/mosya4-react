import styles from 'styles/company.module.css'
import { Layout } from 'components/Layout'


export default function company() {

  

  return (
    <Layout>
        <div className={styles.company}>
          <p>Company</p>
          <div className={styles.company_conteinar}>
            <div className={styles.company_list}>
              <div className={styles.title}>社名</div>
              <div className={styles.text}>株式会社ファニチャーデザイン</div>
            </div>
            <div className={styles.company_list}>
              <div className={styles.title}>住所</div>
              <div className={styles.text}>〒107-0062 東京都港区南青山１丁目××××××</div>
            </div>
            <div className={styles.company_list}>
              <div className={styles.title}>設立</div>
              <div className={styles.text}>XXXX年XX月</div>
            </div>
            <div className={styles.company_list}>
              <div className={styles.title}>資本金</div>
              <div className={styles.text}>XXXX万円</div>
            </div>
            <div className={styles.company_list}>
              <div className={styles.title}>従業員数</div>
              <div className={styles.text}>XX名</div>
            </div>
            <div className={styles.company_list}>
              <div className={styles.title}>事業内容</div>
              <div className={styles.text}>家具、インテリアの企画・生産<br/>家具、インテリアの販売<br/>
店舗の企画・デザイン・設計</div>
            </div>
          </div>
      </div>
      <div className={styles.map}>
      <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6482.583237668659!2d139.72046549376023!3d35.66982084036335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c820ac932eb%3A0xc68079dd10afd971!2z44CSMTA3LTAwNjIg5p2x5Lqs6YO95riv5Yy65Y2X6Z2S5bGx77yR5LiB55uu!5e0!3m2!1sja!2sjp!4v1722226222249!5m2!1sja!2sjp' width="600" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </Layout>
  )
}