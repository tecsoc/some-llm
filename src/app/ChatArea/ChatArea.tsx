import ChatMessage, { MessageType } from "@/app/_atoms/ChatMessage/ChatMessage";
import React from "react";
import styles from "./ChatArea.module.scss";


type Message = {
  text: string;
  messageType: MessageType;
  iconUrl: string;
};
type ChatAreaProps = {
  messages: Message[];
};
const ChatArea = ({ messages }: ChatAreaProps) => {
  return (
    <div className={styles.message_list}>
      {messages.map((message, index) => (
        <ChatMessage key={index} text={message.text} messageType={message.messageType} iconUrl={message.iconUrl} />
      ))}
    </div>
  );
};

export default React.memo(ChatArea);