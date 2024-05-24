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
        console.log(currentChat);
        localStorage.setItem('CurrentChat', JSON.stringify(currentChat));
        getCurrentChat();
    }

    const editCurrentChat = (card, rating) =>
    {
        const chatIndex = chat?.findIndex((list)=> list?.id === card);
        console.log(chat[chatIndex]);

        const transientChat = { id: chat[chatIndex]?.id, 
                                question : chat[chatIndex]?.question, 
                                answer : chat[chatIndex]?.answer, 
                                time: chat[chatIndex]?.time, 
                                rating : rating, 
                               }
     
        chat[chatIndex] = transientChat;
        localStorage.setItem('CurrentChat', JSON.stringify(chat));
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
                editCurrentChat,
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