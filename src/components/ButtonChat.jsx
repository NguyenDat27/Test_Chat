import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

import chatIcon from "@/assets/images/icons/chat.svg";

export default function ButtonChat({ toggleLiveChat, isLiveChatVisible }) {
  return (
    <ButtonChatContainer isLiveChatVisible={isLiveChatVisible}>
      <button className="button_Chat" onClick={toggleLiveChat}>
        <img
          className="imgChat"
          src={chatIcon}
          alt="image chat"
        />
      </button>
    </ButtonChatContainer>
  );
}

const open = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const close = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const ButtonChatContainer = styled.div`
  opacity: ${(props) => (props.isLiveChatVisible ? 0 : 1)};
  visibility: ${(props) => (props.isLiveChatVisible ? 'hidden' : 'visible')};
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  animation: ${(props) => (props.isLiveChatVisible ? close : open)} 0.5s ease-in-out;
  transition: opacity 0.6s ease-in-out, visibility 0.5s ease-in-out;
  .button_Chat {
    display: flex;
    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #4629f2;
    box-shadow: 0px 30px 60px 0px rgba(70, 41, 242, 0.43);
    cursor: pointer;
  }
  .imgChat {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
  
  @media (max-width: 768px) {
    .button_Chat {
      width: 60px;
      height: 60px;
    }
    .imgChat {
      width: 20px;
      height: 20px;
    }
  }
`;