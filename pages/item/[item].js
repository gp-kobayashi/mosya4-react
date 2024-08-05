import { useRouter } from 'next/router'
import { ItemExplain } from 'components/ItemExplain'
import { Layout } from 'components/Layout'


function item() {
 const router = useRouter()
 const imgId = router.query.item - 1 
 return (
    <Layout>
      
      <ItemExplain  page={imgId}/>

    </Layout>
  )
}

export default item