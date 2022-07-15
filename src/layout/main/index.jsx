import { useState, useEffect } from 'react'

import { Container } from '@chakra-ui/react'
import axios from 'axios'

import Card from '../../components/Card'

const Main = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const getInfo = async () => {
      const response = await axios.get(
        'https://strapiecommerce-production-ddba.up.railway.app/api/products?populate[0]=image'
      )
      setData(response.data)
    }
    getInfo()
  }, [])
  return (
    <Container
      maxW="container.xl"
      bg="green.400"
      color="#262626"
      centerContent
      m="2"
    >
      {data &&
        data.data.map((product) => {
          // console.log(product)
          return (
            <Card
              key={product.id}
              title={product.attributes.title}
              img={product.attributes.image.data.attributes.url}
              price={product.attributes.price}
            />
          )
        })}
    </Container>
  )
}
export default Main
