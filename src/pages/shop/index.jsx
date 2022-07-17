import { Flex } from '@chakra-ui/react'

import ListOfProduct from '../../components/list-of-product'
import Layout from '../../layout'
import Filters from './filter'

const Shop = () => {
  return (
    <Layout>
      <Flex>
        <Filters />
        <ListOfProduct />
      </Flex>
    </Layout>
  )
}
export default Shop
