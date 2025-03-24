import { Menu, Portal, HStack, Button } from "@chakra-ui/react"
import { ColorModeButton } from "./ui/color-mode"

const MenuBar = () => {
    return (
        <>
            <HStack>
                <Menu.Root>
                <Menu.Trigger asChild>
                    <Button variant="outline" size="sm">
                    Open Menu
                    </Button>
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item value="latests">Latests</Menu.Item>
                        <Menu.Item value="random-trial">Random trial</Menu.Item>
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