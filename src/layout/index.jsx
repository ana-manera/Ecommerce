import { Flex } from '@chakra-ui/layout'

import Footer from './footer'
import Header from './header'
import Main from './main'

const Layout = ({ children }) => {
  return (
    <Flex w={'100%'} direction={'column'}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Flex>
  )
}
export default Layout
