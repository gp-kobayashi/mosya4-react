import styles from '../styles/about.module.css'
import { Layout } from '../components/Layout'



export default function about() {

  

  return (
    <Layout>

      <div className={styles.about}>
        <p>About</p>
        <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト 
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト 
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト 
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト 
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト 
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト 
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト 
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>

    </Layout>
  )
}