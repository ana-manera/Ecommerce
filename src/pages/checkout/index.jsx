import {
  Text,
  Image,
  Button,
  Flex,
  Heading,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Divider,
} from '@chakra-ui/react'
import { ImBin } from 'react-icons/im'
import { Link } from 'react-router-dom'

import useCart from '../../hook/useCart'
import Layout from '../../layout'

const Checkout = () => {
  const { deleteAllProducts, dataCart, addProduct, deleteProduct, total } =
    useCart()
  if (!dataCart.length)
    return (
      <Layout>
        <Flex
          direction={'column'}
          justify={'center'}
          w={'100%'}
          m="5"
          h={'-webkit-fit-content'}
        >
          <Heading m={'auto'}>Finalizar Compra</Heading>
          <Box>
            <Text mt={'5%'}> No hay productos en el carrito ☹️</Text>
            <Link to={'/'}>
              <Button colorScheme="cyan" variant="solid" my="5">
                Ir a la Tienda
              </Button>
            </Link>
          </Box>
        </Flex>
      </Layout>
    )
  return (
    <>
      <Layout>
        {dataCart.map((item) => {
          return (
            <>
              <Flex>
                <Image
                  src={item.image.data.attributes.url}
                  objectFit="cover"
                  // alt={"imagen del producto"${item.title}}
                  w="80px"
                  mr={'1%'}
                />
                <Flex direction={'column'} w={'100%'}>
                  <Flex justify="space-between">
                    <Heading size="md">{item.title}</Heading>
                    <Button
                      size={'xs'}
                      colorScheme="red"
                      variant="ghost"
                      onClick={() => deleteProduct(item.id)}
                    >
                      <ImBin size="xs" />
                    </Button>
                  </Flex>
                  <Box>
                    <Text size="sm" m="1%">
                      ${item.price}
                    </Text>
                  </Box>
                  <Flex justify="space-between">
                    <Text>Cantidad: </Text>
                    <Box w={'50%'}>
                      <NumberInput
                        defaultValue={item.cant}
                        min={1}
                        max={item.stock}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper
                            onClick={() => addProduct(item)}
                          />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
              <Divider my={'4%'} />
            </>
          )
        })}

        <Flex>
          <Heading>Finalizar Compra</Heading>
          <Box>orden</Box>
          <Box>Pedido</Box>
        </Flex>
      </Layout>
      <Flex direction="column" align="flex-end" w="100%">
        <Button
          w="100%"
          colorScheme="red"
          variant="outline"
          mb="5"
          onClick={deleteAllProducts}
        >
          <Text p="4"> Vaciar carrito </Text> <ImBin />
        </Button>
        <Heading size={'md'}> Total: $ {total} </Heading>
        <Link to={`checkout`}>
          <Button w="100%" colorScheme="teal" variant="solid" my="5">
            <Text p="4"> Continuar Compra </Text>
          </Button>
        </Link>
      </Flex>
    </>
  )
}
export default Checkout
