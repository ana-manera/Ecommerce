import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import useCart from '../../hook/useCart'
import useGet from '../../hook/useGet'
import Layout from '../../layout'

const Producto = () => {
  const { addProduct } = useCart()
  const { id } = useParams()
  const { data } = useGet(`products/${id}?populate[0]=image`)
  if (!data) return null
  return (
    <Layout>
      <Flex direction="row" justifyContent="center" w="80%" m="20">
        <Box>
          <Image
            src={data.data.attributes.image.data.attributes.url}
            w="400px"
          />
        </Box>
        <Flex direction="column" m="50">
          <Heading fontSize="50px">{data.data.attributes.title}</Heading>
          <Text fontSize="25px">$ {data.data.attributes.price}</Text>
          <Text fontSize="20px">{data.data.attributes.description}</Text>
          <Button
            w="300px"
            bg="#11b68a"
            mt="50px"
            onClick={() => addProduct(data.data)}
          >
            Agregar al carrito
          </Button>
        </Flex>
      </Flex>
    </Layout>
  )
}
export default Producto
