import { Flex, Heading, Text, Box, Image, Stack } from '@chakra-ui/react'

import Layout from '../../layout'
const About = () => {
  return (
    <Layout>
      <Flex h="-webkit-fit-content" m="2%">
        <Stack mr="10%">
          <Heading>¿QUIENES SOMOS?</Heading>
          <Text>
            AdaShop - Tienda Online ofrece a todo el país una variada cantidad
            de artículos de bazar y distinguidos accesorios para decorar el
            hogar en ceramica. Desde la comodidad de su casa, los clientes
            pueden acceder a nuestros productos de las marcas más reconocidas a
            nivel nacional e internacional a un precio accesible.
          </Text>
          <Text>
            Nuestro principal objetivo es la satisfacción de compra de los
            usuarios. Esta tienda es una nueva opción para acceder a AdaShop,
            una empresa de larga trayectoria que se desarrolla en el mercado
            desde 1991. ¡Gracias por visitarnos!
          </Text>
        </Stack>
        <Box>
          <Image
            src="https://i.pinimg.com/564x/89/b4/41/89b441c93800f140acfff7aa8eea8cf9.jpg"
            alt="Tienda AdaShop"
          />
        </Box>
      </Flex>
    </Layout>
  )
}
export default About
