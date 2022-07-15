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
import { Link } from 'react-router-dom'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>AdaShop</Box>

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
                  <Link to="/carrito">Carrito</Link>
                </Button>

                <Button>Usuario</Button>
              </ButtonGroup>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
export default Header
