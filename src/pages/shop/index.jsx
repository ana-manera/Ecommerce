import { Flex, Box } from '@chakra-ui/layout'

import ListOfProduct from '../../components/list-of-product'
import useGet from '../../hook/useGet'
import Layout from '../../layout'
import Filters from './filter'
import Paginado from './paginado'

const Shop = ({ data }) => {
  const { page, setPage, meta, setTitle } = useGet(`products?populate[0]=image`)

  return (
    <Layout>
      <Flex w="100%" display={{ md: `flex` }}>
        <Box>
          <Filters setTitle={setTitle} />
        </Box>
        <Flex direction="column" w="100%">
          <Flex wrap="wrap" m="10" justify="center" gap="30">
            <ListOfProduct />
          </Flex>
          <Paginado page={page} setPage={setPage} meta={meta} />
        </Flex>
      </Flex>
    </Layout>
  )
}
export default Shop
