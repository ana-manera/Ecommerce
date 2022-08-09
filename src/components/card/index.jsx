import { Box, Center, Heading, Text, Stack, Image } from '@chakra-ui/react'
import { Link, Link as ReactLink } from 'react-router-dom'

const Card = ({ img, title, price, product }) => {
  return (
    <Link as={ReactLink} to={`/producto/${product.id}`}>
      <Center py={12} maxW="250px">
        <Box
          role={'group'}
          p={6}
          maxW={'230px'}
          w={'full'}
          bgGradient="linear(to-r, teal.500, green.500)"
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
        >
          <Box
            rounded={'lg'}
            mt={0}
            pos={'relative'}
            height={'130px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${img})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image
              rounded={'lg'}
              height={130}
              width={182}
              objectFit={'cover'}
              src={img}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={400}>
              {title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={700} fontSize={'xl'}>
                ${price}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    </Link>
  )
}
export default Card
