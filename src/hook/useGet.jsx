import { useEffect, useState } from 'react'

import axios from 'axios'

const URLBASE = `https://strapiecommerce-production-ddba.up.railway.app/api/`

const useGet = (url) => {
  const [data, setData] = useState()
  //   const [isloading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [meta, setMeta] = useState()
  const [title, setTitle] = useState(``)

  useEffect(() => {
    const getInfo = async (url) => {
      const response = await axios.get(
        `${URLBASE} ${url} &pagination[page]=${page}&pagination[pageSize]=3&filter[title][$containsi]=${title}&?filters[field][operator]=value`
      )
      setData(response.data)
      //   setIsLoading(false)
      setMeta(response.data.meta.pagination)
    }
    getInfo()
  }, [page, title])
  console.log(url)
  return { data, page, setPage, meta, title, setTitle }
}
export default useGet
