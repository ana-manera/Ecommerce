import { Container } from '@chakra-ui/react'

const Main = ({ children }) => {
  return (
    <Container
      maxW="container.xl"
      centerContent
      m="auto"
      h="-webkit-fit-content"
      bg="gray"
    >
      {children}
    </Container>
  )
}
export default Main
