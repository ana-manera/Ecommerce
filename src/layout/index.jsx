import { Stack } from '@chakra-ui/react'

import Carrito from './carrito'
import Footer from './footer'
import Header from './header'
import Main from './main'

const Layout = () => {
  return (
    <Stack>
      <Header />
      <Carrito />
      <Main />

      <Footer />
    </Stack>
  )
}
export default Layout
