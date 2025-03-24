import { Grid, Flex, Text } from "@chakra-ui/react"
import TrialCard from "./TrialCard"

const TrialGrid = ({ trials }) => {
    return (
        <Grid templateColumns='1fr' gap='4'> 
            {trials.map((trial) => (
                <TrialCard key={trial.id} trial={trial} />
            ))}
        </Grid>
    )
}

export default TrialGrid