import { Flex } from '@chakra-ui/layout'

import ListOfProduct from '../../components/list-of-product'
import Layout from '../../layout'
import Carousel from './carousel'

const Home = () => {
  return (
    <Layout>
      <Flex w={'100%'} direction={'column'} align={'stretch'}>
        <Carousel />
        <ListOfProduct />
      </Flex>
    </Layout>
  )
}

export default Home
