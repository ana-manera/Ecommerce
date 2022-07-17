import { Stack } from '@chakra-ui/react'

import Footer from './footer'
import Header from './header'
import Main from './main'

const Layout = ({ children }) => {
  return (
    <Stack>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Stack>
  )
}
export default Layout
