import { createContext, useContext, useState } from "react"

const ChatContext = createContext()

const ChatProvider = ({children}) =>
{
    const [chat, setChat] = useState([]);
    const [chatHistory, setChatHistory] = useState([]);
    const [selectedChat, setSelectedChat] = useState([])
 
    const getCurrentChat = () =>
    {
        setChat(JSON.parse(localStorage.getItem('CurrentChat')));
    }

    const updateCurrentChat = (newChat) =>
    {
        const currentChat = chat === null ? [newChat] : [...chat, newChat];
        localStorage.setItem('CurrentChat', JSON.stringify(currentChat));
        getCurrentChat();
    }

    const getChatHistory = () =>
    {
        setChatHistory(JSON.parse(localStorage.getItem('ChatHistory')));
    }

    const updateChatHistory = (newConversation) =>
    {
        const pastChats = chatHistory === null ? [newConversation] : [...chatHistory,newConversation];
        localStorage.setItem('ChatHistory', JSON.stringify(pastChats));
        getChatHistory();
    }

    const selectedChatHistory = (Conversation) =>
    {
        setSelectedChat(Conversation);
    }

    return(
        <ChatContext.Provider 
            value=
            {{
                chat, 
                getCurrentChat, 
                updateCurrentChat, 
                chatHistory,
                getChatHistory, 
                updateChatHistory,
                selectedChat,
                selectedChatHistory
            }}>
            {children}
        </ChatContext.Provider>
    )
}

const useChat = () =>
{
    return useContext(ChatContext)
}

export {ChatProvider, useChat}