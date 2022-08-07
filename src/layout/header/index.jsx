import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  ButtonGroup,
  Heading,
} from '@chakra-ui/react'
import { BsPerson } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import Botoncart from './carrito/drawer'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link to="/">
            <Heading size="lg">AdaShop</Heading>
          </Link>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={3}>
              <ButtonGroup variant="outline" spacing="3">
                <Button variant="ghost">
                  <Link to="/shop">Tienda</Link>
                </Button>
                <Button variant="ghost">
                  <Link to="/about">Nosotros</Link>
                </Button>
                <Button onClick={toggleColorMode} variant="ghost">
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
                <Botoncart />
                <Button variant="ghost">
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
