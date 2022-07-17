import { useState } from 'react'

import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  ButtonGroup,
} from '@chakra-ui/react'
import { BsCart3, BsPerson } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Header = () => {
  const [cart, setCart] = useState(0)
  const addProduct = () => {
    setCart(cart + 1)
  }
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Link to="/">AdaShop</Link>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={3}>
              <ButtonGroup variant="outline" spacing="3">
                <Button>
                  <Link to="/shop">Tienda</Link>
                </Button>
                <Button>
                  <Link to="/about">Nosotros</Link>
                </Button>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
                <Button>
                  <BsCart3>
                    {' Corregir urgente '}
                    Carrito ({cart}) onClick={() => addProduct()}
                    {'Corregir urgente  '}
                  </BsCart3>
                </Button>

                <Button>
                  <BsPerson> </BsPerson>
                </Button>
              </ButtonGroup>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
export default Header
