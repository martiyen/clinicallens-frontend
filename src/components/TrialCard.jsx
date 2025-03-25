import { Card, Link } from '@chakra-ui/react'
import { LuExternalLink } from 'react-icons/lu'

const TrialCard = ({ trial }) => {
    return (
        <Card.Root maxWidth={'800px'} >
            <Card.Body gap={2}>
                <Card.Title mt={2}>{trial.title}</Card.Title>
                <Card.Description>{trial.summary}</Card.Description>
                <Card.Description>{`Sponsor: ${trial.sponsor_name}`}</Card.Description>
            </Card.Body>
            <Card.Footer justifyContent={'flex-end'}>
                <Card.Description marginRight={3}>{trial.fist_submit_date}</Card.Description>
                <Link variant={'underline'} href={`http://clinicaltrials.gov/study/${trial.id}`} target='_blank'>
                    More <LuExternalLink />
                </Link>
            </Card.Footer>
        </Card.Root>
    )
}

export default TrialCard