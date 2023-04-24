import { Flex } from "@chakra-ui/react";
import Main from "../components/main/Main";
import Sidebar from "../components/sidebar/Sidebar";
import { useEffect, useState } from "react";

function HomePage() {
    const [message, setMessage] = useState({});
    const [value, setValue] = useState("");
    const [previousChats, setPreviousChats] = useState([]);
    const [currentTitle, setCurrentTitle] = useState("");
    const getResponse = async () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: value,
            }),
        };
        try {
            const response = await fetch("/api", options);
            const data = await response.json();
            setMessage(data.choices[0].message);
        } catch (error) {
            console.error(error);
        }
    };
    const newChatHandler = () => {
        setValue("");
        setMessage([]);
        setCurrentTitle("");
    };
    const currentChatsHandler = (previousTitle) => {
        setCurrentTitle(previousTitle);
        setValue("");
        setMessage([]);
    };
    useEffect(() => {
        if (!currentTitle && value && message) {
            setCurrentTitle(value);
        }
        if (currentTitle && value && message) {
            setPreviousChats((prevChats) => [
                ...prevChats,
                {
                    title: currentTitle,
                    role: "user",
                    content: value,
                },
                {
                    title: currentTitle,
                    role: message.role,
                    content: message.content,
                },
            ]);
        }
    }, [message, currentTitle]);

    return (
        <Flex h="100vh" w="100vw" flexDir={{ base: "column", md: "row" }}>
            <Flex
                w={{ base: "full", md: "360px" }}
                h="auto"
                flexDir="column"
                justifyContent="space-between"
                backgroundColor="blackAlpha.400"
                p={2}
                gap={3}
            >
                <Sidebar
                    newChatHandler={newChatHandler}
                    previousChats={previousChats}
                    currentChatsHandler={currentChatsHandler}
                />
            </Flex>
            <Flex
                w="100%"
                h="100%"
                backgroundColor="whiteAlpha.100"
                flexDir="column"
                justifyContent="space-between"
                gap={3}
            >
                <Main
                    getResponse={getResponse}
                    setValue={setValue}
                    value={value}
                    message={message}
                    previousChats={previousChats}
                    currentTitle={currentTitle}
                />
            </Flex>
        </Flex>
    );
}

export default HomePage;
