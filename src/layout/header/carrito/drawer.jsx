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

import Cart from './cart'

const Botoncart = ({ dataCart }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        <BsCart3 />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Mi Carrito</DrawerHeader>
          <DrawerBody>
            {!!dataCart.length || (
              <Text> No hay productos en el carrito ☹️</Text>
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
