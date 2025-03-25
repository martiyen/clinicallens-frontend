import { Group, IconButton, Input} from "@chakra-ui/react"
import { useState } from "react"
import { LuSearch } from "react-icons/lu"

const SearchBar = ({ setTrials, setPage }) => {
    const [textSearch, setTextSearch] = useState('')

    const onSubmit =  async (event) => {
       event.preventDefault()

        try {
            const res = await fetch(`http://localhost:5000/trials/${textSearch}`)
            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error)
            }
            setTrials(data)
        } catch (error) {
            console.log(error)
        }

        setTextSearch('')
        setPage(1)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <Group attached w='full'>
                    <Input value={textSearch} onChange={e => setTextSearch(e.target.value)} placeholder="Search..." variant={'subtle'} height={'36px'}/>
                    <IconButton type={'submit'} size={'sm'} bg={'bg.subtle'} variant={'outline'} onSubmit={onSubmit}>
                        <LuSearch />
                    </IconButton>
                </Group>
            </form>
        </>
    )
}

export default SearchBar