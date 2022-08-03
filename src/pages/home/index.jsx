import ListOfProduct from '../../components/list-of-product'
import Layout from '../../layout'
import Main from '../../layout/main'
import Carousel from './carousel'

const Home = () => {
  return (
    <Layout>
      <Main>
        <Carousel />
        <ListOfProduct />
      </Main>
    </Layout>
  )
}

export default Home
