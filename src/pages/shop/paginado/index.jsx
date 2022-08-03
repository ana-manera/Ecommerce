import { IconButton, Flex, Spacer, Box } from '@chakra-ui/react'
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs'

const Paginado = ({ setPage, page, LastPage }) => {
  return (
    <Flex>
      <Box>
        <IconButton
          colorScheme="teal"
          aria-label="Call Segun"
          size="lg"
          icon={<BsFillArrowLeftSquareFill />}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        />
      </Box>
      <Spacer />
      <Box>
        <IconButton
          colorScheme="teal"
          aria-label="Call Segun"
          size="lg"
          icon={<BsFillArrowRightSquareFill />}
          onClick={() => setPage(page + 1)}
          disabled={page === LastPage}
        />
      </Box>
    </Flex>
  )
}
export default Paginado
