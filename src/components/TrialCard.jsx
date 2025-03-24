import { Card } from '@chakra-ui/react'

const TrialCard = ({ trial }) => {
    return (
        <Card.Root maxWidth={'700px'} >
            <Card.Body gap={2}>
                <Card.Title mt={2}>{trial.title}</Card.Title>
                <Card.Description>{trial.summary}</Card.Description>
            </Card.Body>
        </Card.Root>
    )
}

export default TrialCard