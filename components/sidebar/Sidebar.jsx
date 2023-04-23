import {
    Box,
    Button,
    List,
    ListIcon,
    ListItem,
    Show,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";

function Sidebar(props) {
    const { newChatHandler, previousChats, currentChatsHandler } = props;
    const previousTitles = Array.from(
        new Set(previousChats?.map((previousChat) => previousChat.title))
    );
    const displayPreviousTitles = previousTitles?.map((previousTitle) => (
        <ListItem
            display="flex"
            justifyContent="start"
            alignItems="center"
            borderRadius={4}
            px={4}
            py={2}
            key={previousTitle}
            _hover={{
                backgroundColor: "whiteAlpha.300",
                cursor: "pointer",
            }}
            _active={{
                backgroundColor: "whiteAlpha.400",
            }}
            onClick={() => {
                currentChatsHandler(previousTitle);
            }}
        >
            <ListIcon as={BsChatLeft} />
            <Text marginStart={2}>{previousTitle}</Text>
        </ListItem>
    ));
    return (
        <>
            <Button
                onClick={newChatHandler}
                rightIcon={<AiOutlinePlus />}
                colorScheme="gray"
                w="full"
                iconSpacing="auto"
                size="lg"
            >
                New chat
            </Button>
            <List spacing={2} w="full" h="full">
                {displayPreviousTitles}
            </List>
            <Show above="md">
                <Box
                    borderTop="1px"
                    borderColor="gray.300"
                    w="full"
                    h={24}
                    textAlign="start"
                    p={4}
                >
                    <Text fontSize="md">Made by marcemrze24</Text>
                </Box>
            </Show>
        </>
    );
}

export default Sidebar;
