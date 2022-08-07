import { useState } from 'react'

import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const toast = useToast()
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const iniciarSesion = async ({ mail, password }) => {
    try {
      const { data } = await axios.post(
        'https://strapiecommerce-production-2d55.up.railway.app/api/auth/local',
        {
          identifier: mail,
          password,
        }
      )
      console.log(data)
      toast({
        title: 'Bienvenido',
        description: data.mail,
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container borderRadius="xl" bg="white" padding="0">
      <Heading
        align="center"
        color="#11b68a"
        mb="5"
        h="50px"
        borderRadius="md"
        maxWidth="90%"
      >
        REGISTRATE
      </Heading>
      <Box as="form" onSubmit={handleSubmit(iniciarSesion)}>
        <Flex direction="column" alignItems="center">
          <FormControl w="90%" isInvalid={!!errors.mail}>
            <FormLabel>Nombre completo</FormLabel>
            <Input />
            <FormLabel htmlFor="email" pt="5px">
              Email
            </FormLabel>
            <Input
              id="email"
              {...register('mail', {
                required: 'este campo es requerido',
                pattern: {
                  value:
                    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                  message: 'Ingrese un email correcto',
                },
              })}
            />
            {errors.mail && (
              <FormErrorMessage>{errors.mail?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl w="90%" isInvalid={!!errors.password}>
            <FormLabel htmlFor="password" pt="10px">
              Contraseña
            </FormLabel>
            <InputGroup>
              <Input
                type={show ? 'text' : 'password'}
                {...register('password', {
                  required: 'este campo es requerido',
                  minLength: {
                    value: 3,
                    message: 'Mínimo 3 caracteres',
                  },
                  maxLength: {
                    value: 8,
                    message: 'Máximo 8 caracteres',
                  },
                })}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.password && (
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            )}
          </FormControl>
          <Button
            type="submit"
            my="35px"
            w="100%"
            bg="#11b68a"
            justifyContent="center"
          >
            Login
          </Button>
        </Flex>
      </Box>
    </Container>
  )
}

export { Register }
