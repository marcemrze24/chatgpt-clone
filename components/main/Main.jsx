import {
    Heading,
    IconButton,
    InputGroup,
    InputRightElement,
    List,
    ListItem,
    VStack,
    Input,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { SiChatbot } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";

function Main(props) {
    const { value, setValue, getResponse, previousChats, currentTitle } = props;
    const currentChats = previousChats?.filter(
        (previousChat) => previousChat.title === currentTitle
    );
    console.log(currentChats);
    const displayCurrentChats = currentChats?.map((currentChat, index) => (
        <ListItem
            key={index}
            display="flex"
            flexDir={{ base: "column", md: "row" }}
            alignItems="center"
            gap={4}
            py={{ base: 4, md: 0 }}
            px={4}
            minHeight={28}
            backgroundColor={
                currentChat.role === "user" ? "transparent" : "whiteAlpha.200"
            }
        >
            {currentChat.role === "user" ? (
                <FaUserCircle style={{ fontSize: "36px" }} />
            ) : (
                <SiChatbot style={{ fontSize: "36px" }} />
            )}
            <p>{currentChat.content}</p>
        </ListItem>
    ));
    return (
        <>
            {!currentTitle && (
                <Heading
                    h="100%"
                    textAlign="center"
                    marginTop={16}
                    fontSize="5xl"
                >
                    Marce GPT
                </Heading>
            )}
            <List overflow="auto">{displayCurrentChats}</List>
            <VStack maxW="650px" mx="auto" spacing={4} pb={4} p={2} px={4}>
                <InputGroup>
                    <Input
                        focusBorderColor="lime"
                        borderRadius={4}
                        placeholder="Send a message..."
                        backgroundColor="whiteAlpha.100"
                        type="text"
                        fontSize={18}
                        h={12}
                        value={value}
                        _placeholder={{
                            color: "gray.500",
                        }}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                    />
                    <InputRightElement
                        onClick={() => {
                            getResponse();
                        }}
                        h={12}
                    >
                        <IconButton icon={<AiOutlineSend />} variant="ghost" />
                    </InputRightElement>
                </InputGroup>
                <Text fontSize="xs">
                    ChatGPT Mar 23 Version. Free Research Preview. ChatGPT may
                    produce inaccurate information about people, places, or
                    facts.
                </Text>
            </VStack>
        </>
    );
}

export default Main;
