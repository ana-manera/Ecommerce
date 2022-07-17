import { Container } from '@chakra-ui/react'
// Here we have used react-icons package for the icons

const Carousel = () => {
  return (
    <Container
      position={'relative'}
      height={'100px'}
      width={'full'}
      overflow={'hidden'}
      bg="yellow.100"
    >
      Esto es Carrucel
    </Container>
  )
}
export default Carousel
