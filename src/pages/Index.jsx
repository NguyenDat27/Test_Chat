import React, { useState } from "react";
import LiveChat from "@/components/LiveChat";
import ButtonChat from "@/components/ButtonChat";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function App() {
  const [isLiveChatVisible, setIsLiveChatVisible] = useState(false);

  const toggleLiveChat = () => {
    setIsLiveChatVisible((prev) => !prev);
  };

  return (
    <>
      <LiveChat
        toggleLiveChat={toggleLiveChat}
        isLiveChatVisible={isLiveChatVisible}
      />
      <DarkModeToggle/>
      <ButtonChat 
        toggleLiveChat={toggleLiveChat} 
        isLiveChatVisible={isLiveChatVisible}
      />
    </>
  );
}
