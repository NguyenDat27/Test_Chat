import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useTheme } from "@/ThemeProvider.jsx";
import EmojiPicker from "@/components/display/EmojiPicker.jsx";
import ImagePicker from"@/components/display/ImagePicker.jsx";

// import svg
import cIcon from "@/assets/images/icons/c.svg";
import closeIcon from "@/assets/images/icons/close.svg";
import avatarIcon from "@/assets/images/assistant.png";
import emojiLightIcon from "@/assets/images/icons/emoji_light.svg";
import emojiDarkIcon from "@/assets/images/icons/emoji_dark.svg";
import imageLightIcon from "@/assets/images/icons/image_light.svg";
import imageDarkIcon from "@/assets/images/icons/image_dark.svg";
import arrowIcon from "@/assets/images/icons/arrow.svg";

export default function LiveChat({ toggleLiveChat, isLiveChatVisible }) {

  const { theme } = useTheme();

  const [inputStr, setInputStr] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showImagePicker, setShowImagePicker] = useState(false);

  const onEmojiClick = (EmojiClickData) => {
    setInputStr(prev => prev + EmojiClickData.emoji);
    setShowEmojiPicker(false);
  }

  const handleChange = () => {
    setShowImagePicker(pre => !pre);
  }

  return (
    <>
      <LiveChatWrapper theme={theme} isLiveChatVisible={isLiveChatVisible}>
        <div className="LiveChatWrapper_container">
          <div className="liveChat_head">
            <div className="liveChat_head_bg"></div>
            <div className="liveChat_head_content">
              <div className="content_head">
                <div className="content_head_avatar">
                  <img src={cIcon} alt="" />
                </div>
                <div className="content_head_close" onClick={toggleLiveChat}>
                  <img src={closeIcon} alt="" />
                </div>
              </div>
              <div className="liveChat_head_title">
                <h2 className="title_text">ChatFlow</h2>
                <p className="head_desc">
                  A live chat interface that allows for seamless, natural 
                  communication and connection.
                </p>
              </div>
            </div>
          </div>
          <div className="liveChat_dialog">
            {showEmojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
            {showImagePicker && <ImagePicker/>}
            <div className="message_item_ask_container">
              <div className="message_item_ask">
                <div className="message_item_desc desc_ask">
                  <p className="desc_text desc_ask_text">
                    I have a question about the return policy for a product I purchased.
                  </p>
                </div>
                <div className="ask_time">
                  <p className="time_text">08:16 AM</p>
                </div>
              </div>
            </div>
            <div className="message_item_feedback">
              <div className="message_item_avatar">
                <img src={avatarIcon} alt="" />
              </div>
              <div className="message_item_content">
                <h3 className="message_item_name">Assistant</h3>
                <div className="message_item_desc desc_feedback">
                  <p className="desc_text desc_feedback_text">
                    I'm doing well, thank you!
                    How can I help you today?
                  </p>
                </div>
                <div className="message_time">
                  <p className="time_text">08:16 AM</p>
                </div>
              </div>
            </div>
            <div className="message_item_ask_container">
              <div className="message_item_ask">
                <div className="message_item_desc desc_ask">
                  <p className="desc_text desc_ask_text">
                    I have a question about the return policy for a product I purchased.
                  </p>
                </div>
                <div className="ask_time">
                  <p className="time_text">Just now</p>
                </div>
              </div>
            </div>
            <div className="message_item_feedback">
              <div className="message_item_avatar">
                <img src={avatarIcon} alt="" />
              </div>
              <div className="message_item_content">
                <h3 className="message_item_name">Assistant</h3>
                <div className="message_item_desc desc_feedback">
                  <div className="message_dot"></div>
                  <div className="message_dot"></div>
                  <div className="message_dot"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="liveChat_input">
            <div className="input_container">
              <img 
                src={theme === 'dark' 
                  ? emojiDarkIcon 
                  : emojiLightIcon} 
                alt="emoji" 
                onClick={() => setShowEmojiPicker((val) => !val)}
              />
              <input className="input"
                type="text"
                placeholder="Reply ..." 
                value={inputStr}
                onChange={e => setInputStr(e.target.value)}
              />
            </div>
            <div className="button_container">
              <img
                src={
                  theme === "dark"
                    ? imageDarkIcon
                    : imageLightIcon
                }
                alt="upload"
                onClick={handleChange}
              />
              <div className="button_send">
                  <img className="arrow" src={arrowIcon} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </LiveChatWrapper>
    </>
  );
}
const LiveChatWrapper = styled.section`
  opacity: ${(props) => (props.isLiveChatVisible ? 1 : 0)};
  visibility: ${(props) => (props.isLiveChatVisible ? 'visible' : 'hidden')};
  position: absolute;
  right: 10px;
  bottom: 30px;
  animation: ${(props) => (props.isLiveChatVisible ? open : close)} 0.5s ease-in-out;
  transition: opacity 0.6s ease-in-out, visibility 0.5s ease-in-out;
  z-index: 9999;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10002;
  }
  @media (max-height: 760px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10002;
  }
  
  .LiveChatWrapper_container {
    box-shadow: 0px 30px 60px 0px rgba(70, 41, 242, 0.14);
    width: 450px;
    height: 819px;
    border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
    @media (max-height: 760px) {
      height: 100%;
      width: 100%;
    }
  }
  .liveChat_head {
    width: 100%;
    height: 239px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    border-radius: 8px 8px 0px 0px;
    overflow: hidden;
    @media (max-width: 768px) {
      height: 25%;
      border-radius: 0;
    }
    @media (max-height: 760px) {
      height: 30%;
      border-radius: 0;
    }
  }
  .liveChat_head_bg {
    background: conic-gradient(
        from 202deg at 81.78% 23.22%,
        #4629f2 0deg,
        #13c6ff 125.62500357627869deg,
        #b94dfb 215.62499284744263deg,
        #ff53ee 294.3749928474426deg,
        #f3b960 360deg
      ),
      #d9d9d9;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .liveChat_head_content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 8px 8px 0px 0px;
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(25px);
    padding: 30px;
    width: 100%;
    height: 100%;
    @media (max-width: 375px) {
      gap: 10px;
      padding: 20px;
    }
    @media (max-height: 400px) {
      gap: 0px;
      justify-content: center;
      padding: 5px 10px 5px 10px;
    }
  }
  .content_head {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    .content_head_avatar {
      display: flex;
      width: 60px;
      height: 60px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 100px;
      background: #fff;
      cursor: pointer;
      img {
        width: 16px;
        height: 22px;
        flex-shrink: 0;
        @media (max-width: 768px) {
          width: 14px;
          height: 20px;
        }
        @media (max-height: 760px) {
          width: 14px;
          height: 20px;
        }
      }
      @media (max-width: 768px) {
        width: 40px;
        height: 40px;
      } 
      @media (max-height: 760px) {
        gap: 5px;
        width: 40px;
        height: 40px;
      }
      
    }
    .content_head_close {
      cursor: pointer;
      display: flex;
      width: 40px;
      height: 40px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 100px;
      background: rgba(255, 255, 255, 0.2);
      img {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
      }
    }
  }
  .liveChat_head_title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
  .title_text {
    color: #fff;
    font-family: "Source Sans Pro";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 375px) {
      font-size: 24px;
    }
  }
  .head_desc {
    color: #fff;
    font-family: "Source Sans Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    @media (max-width: 375px) {
      font-size: 14px;
    }
    @media (max-height: 525px) {
      display: none;
    }
  }
  .liveChat_dialog {
    display: flex;
    padding: 30px;
    flex-direction: column;
    align-items: flex-start;
    gap: 35px;
    align-self: stretch;
    overflow-y: auto;
    flex: 1;
    background: ${(props) => props.theme === "dark" ? "#0d082c" : "#FFF"};
    @media (max-width: 768px) {
      padding: 20px;
      gap: 20px;
      flex: 1;
    }
  }
  .emoji-picker-wrapper {
    position: absolute;
    bottom: 90px;
    left: 30px;
    right: 30px;
    z-index: 10005;
  }
  .image-picker {
    position: absolute;
    bottom: 90px;
    right: 30px;
    width: auto;
    z-index: 10006;
    @media (max-height: 440px) {
      bottom: 60px;
    }
  }
  .message_item_ask_container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .message_item_ask {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
    align-self: stretch;
    max-width: 70%;
  }
  .message_ask_content {
    display: flex;
    height: 44px;
    padding: 10px 15px;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    border-radius: 10px 0px 10px 10px;
    background: #4629f2;
  }
  .message_item_feedback {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    .message_item_avatar {
      width:40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .message_item_content {
      display: flex;
      max-width: 70%;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }
  }
  .message_item_name {
    color:  ${(props) => props.theme === "dark" ? "#FFF" : "#0d082c"};
    font-family: "Source Sans Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .message_item_desc {
    display: flex;
    padding: 10px 15px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 0px 10px 10px 10px;
  }
  .desc_feedback {
    background: ${(props) => props.theme === "dark" ? "#1d1748" : "#f1f7ff"};
  }
  .desc_ask {
    background: #4629f2;
  }
  .desc_ask_text {
    color: #fff;
  }
  .desc_text {
    font-family: "Source Sans Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    flex: 1 0 0;
  }
  .desc_feedback_text {
    color: ${(props) => props.theme === "dark" ? "#FFF" : "#0d082c"};
  }
  .message_time {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-self: stretch;
  }
  .ask_time {
    display: flex;
    width: 100%;
    align-items: center;
  }
  .time_text {
    color: ${(props) => props.theme === "dark" ? "rgba(255, 255, 255, 0.40)" : "rgba(13, 8, 44, 0.4)"};
    font-family: "Source Sans Pro";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .message_dot {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    background: ${(props) => props.theme === "dark" ? "#6f699b" : "#c7dfff"};
    border-radius: 50%;
  }
  .liveChat_input {
    display: flex;
    padding: 20px 30px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0px 0px 8px 8px;
    background: ${(props) => props.theme === "dark" ? "#0d082c" : "#FFF"};
    border-top: 1px solid ${(props) => props.theme === "dark" ? "#181045" : "rgba(0, 0, 0, 0.05)"};
    bottom: 0;
    left: 0;
    width: 100%;
    gap: 10px;
    @media (max-width: 768px) {
      height: 10%;
      border-radius: 0;
    }
    @media (max-height: 760px) {
      padding: 10px 20px;
      height: 15%;
      border-radius: 0;
    }
  }
  .input_container {
    display: flex;
    gap: 20px;
    img {
      cursor: pointer;
    }
    input {
      color: ${(props) => props.theme === "dark" ? "#FFF" : "#0d082c"};
    }
    @media (max-width: 360px) {
      gap: 10px;
    } 
  }
  .button_container {
    display: flex;
    gap: 30px;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
    .button_send {
      width: 40px;
      height: 40px;
      background: #4629f2;
      color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media (max-width: 360px) {
      gap: 10px;
      .button_send {
        width: 25px;
        height: 25px;
      }
      img {
        width: 20px;
        height: 20px;
      }
      .arrow {
        width: 15px;
        height: 15px;
      }
    }
`;

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