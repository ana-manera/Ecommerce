import {
  Heading,
  Input,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
  Switch,
  Container,
} from '@chakra-ui/react'

const Filters = () => {
  return (
    <Container bg="white" w="30%" p={4} color="black">
      <Heading as="h2" size="xl">
        Productos
      </Heading>
      <Input placeholder="Buscar..." />
      <Heading as="h4" size="md" m="7px">
        Filtrar por precio
      </Heading>
      <RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]}>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <Text fontSize="md">Precio: $0 - $10000</Text>
      <Heading as="h4" size="md">
        Unidades disponibles
      </Heading>
      <Switch id="producto-disponible" />
    </Container>
  )
}
export default Filters
