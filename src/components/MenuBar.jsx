import { Menu, Portal, HStack, Button } from "@chakra-ui/react"
import { ColorModeButton } from "./ui/color-mode"
import SearchBar from "./SearchBar"
import { BASE_URL } from "@/App"

const MenuBar = ({ setTrials, setPage }) => {
    const handleLatests =  async () => {
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

    const handleRandom =  async () => {
        try {
            const res = await fetch(BASE_URL + '/random')
            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error)
            }
            setTrials(data)
        } catch (error) {
            console.log(error)
        }
    }

    
    return (
        <>
            <HStack>
                <SearchBar setTrials={setTrials} setPage={setPage} />
                <Menu.Root>
                <Menu.Trigger asChild>
                    <Button variant="outline" size="sm">
                    Open Menu
                    </Button>
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item value="latests" onClick={handleLatests}>Latests</Menu.Item>
                        <Menu.Item value="random-trial" onClick={handleRandom}>Random trial</Menu.Item>
                    </Menu.Content>
                    </Menu.Positioner>
                </Portal>
                </Menu.Root>
                <ColorModeButton variant='outline' />
            </HStack>
        </>
    )
}

export default MenuBar