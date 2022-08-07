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
} from '@chakra-ui/react'
import { ImBin } from 'react-icons/im'

import useCart from '../../../hook/useCart'

const Cart = () => {
  const { deleteAllProducts, dataCart, addProduct } = useCart()
  if (!dataCart.length) return null
  return (
    <>
      {dataCart.map((item) => {
        return (
          <>
            <Flex>
              <Heading size="md">{item.title}</Heading>
              <Button
                colorScheme="red"
                variant="ghost"
                // onClick={() => deleteProduct(product.id)}
              >
                <ImBin size="xs" />
              </Button>
            </Flex>
            <Flex gap="30">
              <Image src={item.image.data.attributes.url} w="80px" />
              <Box>
                <Heading size="xs"> ${item.price} </Heading>
                <Text>Cantidad: </Text>
              </Box>
              <NumberInput defaultValue={item.cant} min={1} max={item.stock}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper onClick={() => addProduct(item)} />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          </>
        )
      })}
      <Flex direction="column" align="flex-start" w="100%">
        <Button
          w="100%"
          colorScheme="red"
          variant="outline"
          mb="5"
          onClick={deleteAllProducts}
        >
          <Text p="4"> Vaciar carrito </Text> <ImBin />
        </Button>
        <Heading> Total: </Heading>
      </Flex>
    </>
  )
}

export default Cart
