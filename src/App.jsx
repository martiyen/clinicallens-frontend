import { Heading, Stack, Container, Flex, LinkOverlay } from "@chakra-ui/react"
import MenuBar from "./components/MenuBar"
import { useState, useEffect } from "react"
import TrialGrid from "./components/TrialGrid"
import Statistics from "./components/Statistics"

export const BASE_URL = import.meta.env.MODE === 'development' ? 'http://localhost:5000/trials' : '/trials'

function App() {

  const [trials, setTrials] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getTrials = async () => {
        try {
            const res = await fetch(BASE_URL + '/latests')
            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error)
            }
            setTrials(data)
        } catch (error) {
            console.log(error)
        }
    }
    getTrials()
}, [])

  return (
    <>
      <Stack minH="100vh">
        <Container maxWidth={'1200px'} my={4}>
          <Flex alignItems={'center'} justifyContent={'space-between'} marginBottom={4}>
            <Stack position={'relative'}>
              <Heading>
                <LinkOverlay href="">
                  Clinical Lens
                </LinkOverlay>
              </Heading>
            </Stack>
            <MenuBar setTrials={setTrials} setPage={setPage} />
          </Flex>
          <Statistics />
          <Flex justifyContent={'center'}>
            <TrialGrid trials={trials} page={page} setPage={setPage} />
          </Flex>
        </Container>
      </Stack>
    </>
  )
}

export default App
