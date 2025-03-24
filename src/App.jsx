import { Button, HStack, Heading, Stack, Container, Flex } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import TrialGrid from "./components/TrialGrid"

function App() {

  const [trials, setTrials] = useState([])

  useEffect(() => {
    const getTrials = async () => {
        try {
            const res = await fetch('http://localhost:5000/trials/latest')
            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error)
            }
            setTrials(data)
            console.log(data)
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
          <Heading marginBottom={4}>Clinical Lens</Heading>
          <Flex>
            <TrialGrid trials={trials} />
          </Flex>
        </Container>
      </Stack>
    </>
  )
}

export default App
