import { useState } from 'react'

import { Flex } from '@chakra-ui/layout'

import ListOfProduct from '../../components/list-of-product'
import Layout from '../../layout'
import Main from '../../layout/main'
import Filters from './filter'
import Paginado from './paginado'

const Shop = ({ data }) => {
  const [page, setPage] = useState(1)
  const elementsForPage = 3
  const lastPage = Math.ceil([data].length / elementsForPage)
  const offPage = elementsForPage * (page - 1)
  return (
    <Layout>
      <Main>
        <Flex>
          <Filters />
          <ListOfProduct offPage={offPage} elementsForPage={elementsForPage} />
          <Paginado page={page} setPage={setPage} lastPage={lastPage} />
        </Flex>
      </Main>
    </Layout>
  )
}
export default Shop
