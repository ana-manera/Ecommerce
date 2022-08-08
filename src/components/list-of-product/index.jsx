import { Flex } from '@chakra-ui/react'

import useGet from '../../hook/useGet'
import Card from '../Card'

const ListOfProduct = () => {
  const { data } = useGet(`products/?populate[0]=image`)
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="space-around"
      maxW="container.xl"
      bg="green.400"
      centerContent
      mx="2%"
    >
      {data &&
        [...data.data].map((product) => {
          return (
            <Card
              product={product}
              key={product.id}
              title={product.attributes.title}
              img={product.attributes.image.data.attributes.url}
              price={product.attributes.price}
            />
          )
        })}
    </Flex>
  )
}
export default ListOfProduct
