import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, receiveMessage } from "./store/chatSlice";
import ChatDisplay from "./components/ChatDisplay";
import MessageInput from "./components/MessageInput";

const mockReplies = [
  { user: "Jane Doe", content: "That sounds interesting!" },
  { user: "Jane Doe", content: "What are your weekend plans?" },
  { user: "Jane Doe", content: "I have some work to catch up on." },
];

const App = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const [messageSent, setMessageSent] = useState(false);

  const handleSendMessage = (messageContent) => {
    const currentUser = "Pintu Kumar"; 
    dispatch(sendMessage({ user: currentUser, content: messageContent }));
    setMessageSent(true);
  };

  useEffect(() => {
    if (!messageSent) return; 

    const timeoutId = setTimeout(() => {
      const randomReply =
        mockReplies[Math.floor(Math.random() * mockReplies.length)];
      console.log("Sending reply:", randomReply);
      dispatch(receiveMessage(randomReply));
      setMessageSent(false); 
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [messageSent, dispatch]);

  useEffect(() => {
    console.log("Current messages:", messages);
  }, [messages]);

  return (
    <div>
      <ChatDisplay messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;
