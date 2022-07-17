import ListOfProduct from '../../components/list-of-product'
import Layout from '../../layout'
import Carousel from './carousel'

const Home = () => {
  return (
    <Layout>
      <main>
        <Carousel />
        <ListOfProduct />
      </main>
    </Layout>
  )
}

export default Home
