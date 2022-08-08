import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Text,
} from '@chakra-ui/react'
import { BsCart3 } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import useCart from '../../../hook/useCart'
import Cart from './cart'

const Botoncart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { dataCart } = useCart()

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        <BsCart3 /> ({dataCart.length})
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Mi Carrito</DrawerHeader>
          <DrawerBody>
            {!!dataCart.length || (
              <>
                <Text> No hay productos en el carrito ☹️</Text>
                <Link to={'/'}>
                  <Button w="100%" colorScheme="cyan" variant="solid" my="5">
                    Ir a la Tienda
                  </Button>
                </Link>
              </>
            )}
            {!!dataCart.length && <Cart />}
          </DrawerBody>
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default Botoncart
