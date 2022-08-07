import { useEffect, useState } from 'react'

import axios from 'axios'

const URLBASE = 'https://strapiecommerce-production-ddba.up.railway.app/api/'

const useGet = (url) => {
  const [data, setData] = useState()
  const [isloading, setIsLoading] = useState(true)

  useEffect(() => {
    const getInfo = async () => {
      const response = await axios.get(`${URLBASE}${url}`)
      setData(response.data)
      setIsLoading(false)
    }
    getInfo()
  }, [])
  return { data, isloading }
}
export default useGet

// import { useEffect, useState } from 'react'

// import axios from 'axios'

// const URLBASE = `https://strapiecommerce-production-ddba.up.railway.app/api/`

// const useGet = (url) => {
//   const [data, setData] = useState()
//   const [page, setPage] = useState(1)
//   const [meta, setMeta] = useState()
//   const [title, setTitle] = useState(``)
//   console.log(url)
//   useEffect(() => {
//     const getInfo = async () => {
//       const response = await axios.get(`${URLBASE} ${url}`)

//       // &pagination[page]=${page}&pagination[pageSize]=3&filter[title][$containsi]=${title}&?filters[field][operator]=value
//       setData(response.data)
//       setMeta(response.data.meta.pagination)
//     }
//     getInfo()
//   }, [page, title])

//   return { data, page, setPage, meta, title, setTitle }
// }
// export default useGet

// AXIOS ORIGINAL
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
