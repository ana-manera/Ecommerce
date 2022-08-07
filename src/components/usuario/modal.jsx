import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react'
import { BiUser } from 'react-icons/bi'

import { Login } from './Login'
import { Register } from './Register'

const ModalForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button variant={'ghost'} onClick={onOpen}>
        <BiUser size="25" />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Tabs>
              <TabList>
                <Tab>Ingresar</Tab>
                <Tab>Registrate</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login />
                </TabPanel>
                <TabPanel>
                  <Register />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export { ModalForm }
