import { Stack, Pagination, ButtonGroup, IconButton } from "@chakra-ui/react"
import TrialCard from "./TrialCard"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { useEffect } from "react"

const pageSize = 10

const TrialGrid = ({ trials, page, setPage }) => {

    const startRange = (page - 1) * pageSize
    const endRange = startRange + pageSize

    const visibleItems = trials.slice(startRange, endRange)

    const handlePageChange = (event) => {
        setPage(event.page)
    }

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }, 0) // Does not work correctly without this timeout trick. Need to investigate.
    }, [page])

    return (
        <Stack gap={4}>
            <Stack gap='4'>
                {visibleItems.map((trial) => (
                    <TrialCard key={trial.id} trial={trial} />
                ))}
            </Stack>
            <Pagination.Root count={trials.length} pageSize={pageSize} page={page} onPageChange={handlePageChange}>
                <ButtonGroup variant={'ghost'} size={'sm'}>
                    <Pagination.PrevTrigger asChild>
                        <IconButton>
                            <HiChevronLeft />
                        </IconButton>
                    </Pagination.PrevTrigger>

                    <Pagination.Items render={page => (
                        <IconButton variant={{ base: 'ghost', _selected: 'outline' }}>
                            {page.value}
                        </IconButton>
                    )}
                    />

                    <Pagination.NextTrigger asChild>
                        <IconButton>
                            <HiChevronRight />
                        </IconButton>
                    </Pagination.NextTrigger>
                </ButtonGroup>
            </Pagination.Root>
        </Stack>
    )
}

export default TrialGrid