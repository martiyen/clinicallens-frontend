import { Card, Stack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const Statistics = () => {
    const [trialCount, setTrialCount] = useState()
    const [bestSponsors, setBestSponsors] = useState([])

    useEffect(() => {
        const getStats = async () => {
            try {
                const countRes = await fetch('http://localhost:5000/trials/count')
                const countData = await countRes.json()

                const sponsorsRes = await fetch('http://localhost:5000/trials/best-sponsors')
                const sponsorsData = await sponsorsRes.json()

                setTrialCount(countData.total_trials)
                setBestSponsors(sponsorsData)
            } catch (error) {
                console.error(error)
            }
        }
        getStats()
    }, [])

    return (
        <>
            {trialCount && bestSponsors && (
                <Card.Root maxW="800px" mx="auto" my={4} shadow={'md'}>
                    <Card.Body>
                        <Stack align="center" spacing={3}>
                            <Text fontSize="lg" fontWeight="bold">
                                Total Trials: <Text as="span" color="blue.600">{trialCount}</Text>
                            </Text>
                            <Text textAlign="center" fontSize="md">
                                Best Sponsors: <br />
                            </Text>
                            <Stack spacing={1}>
                                {bestSponsors.map((sponsor, index) => (
                                    <Text key={index} fontWeight="semibold" textAlign={'center'}>
                                        {`${sponsor.sponsorName} (${sponsor.count})`}
                                    </Text>
                                ))}
                            </Stack>
                        </Stack>
                    </Card.Body>
                </Card.Root>
            )}
        </>
    )
}

export default Statistics