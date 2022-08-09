import { Spacer } from '@chakra-ui/layout'
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
  // Divider,
} from '@chakra-ui/react'
import { ImBin } from 'react-icons/im'
import { Link } from 'react-router-dom'

import useCart from '../../hook/useCart'
import Layout from '../../layout'

const Checkout = () => {
  const { dataCart, addProduct, deleteProduct, total } = useCart()
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
        <Flex w={'100%'} direction={'column'} m="2%">
          <Heading mx={'auto'} my="3%">
            Finalizar Compra
          </Heading>
          <Flex w={'100%'} justify="space-around">
            <Flex direction={'column'} w={'100%'} m="2">
              {dataCart.map((item) => {
                return (
                  <>
                    <Flex w={'70%'} m="2">
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
                      {/* <Divider my={'4%'} /> */}
                    </Flex>
                  </>
                )
              })}
            </Flex>
            <Flex direction="column" w={'100%'} m="3">
              <Heading size={'lg'}>Pedido</Heading>
              <Flex align={'center'} justify="space-evenly">
                <Text p="4" as="u">
                  Envio:
                </Text>
                <Text>Por el momento no hacemos envios</Text>
                <Spacer />
                <Heading size={'md'} mx="2">
                  Total: $ {total}
                </Heading>
              </Flex>
              <Button w="100%" colorScheme="teal" variant="solid" my="5">
                <Text p="4"> Finalizar Compra </Text>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Layout>
    </>
  )
}
export default Checkout
