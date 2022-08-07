// import { useEffect, useState } from 'react'

import { Flex } from '@chakra-ui/react'
// import axios from 'axios'

import useGet from '../../hook/useGet'
import Card from '../Card'

const ListOfProduct = () => {
  const { data } = useGet(`products/?populate[0]=image`)
  // const [data, setData] = useState()
  // useEffect(() => {
  //   const getInfo = async () => {
  //     const response = await axios.get(
  //       'https://strapiecommerce-production-ddba.up.railway.app/api/products?populate[0]=image'
  //     )
  //     setData(response.data)
  //   }
  //   getInfo()
  // }, [])
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="space-around"
      maxW="container.xl"
      bg="green.400"
      centerContent
      m="2"
    >
      {data &&
        [...data.data].map((product) => {
          return (
            <Card
              key={product.id}
              title={product.attributes.title}
              img={product.attributes.image.data.attributes.url}
              price={product.attributes.price}
            />
          )
        })}
    </Flex>
  )
}
export default ListOfProduct
