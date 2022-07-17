import { Container } from '@chakra-ui/react'

const Main = ({ children }) => {
  return (
    <Container
      maxW="container.xl"
      bg="gray.200"
      centerContent
      m="auto"
      h="-webkit-fit-content"
    >
      {children}
    </Container>
  )
}
export default Main
