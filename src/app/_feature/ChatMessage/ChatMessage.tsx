
import Image from "next/image";
import React from "react";
import styles from "./ChatMessage.module.scss";
type MessageType = "sender" | "receiver";
type ChatMessageProps = {
  text: string;
  iconUrl: string;
  messageType: MessageType;
}

const messageTypeClass: {
  [key in MessageType]: string;
} = {
  sender: styles.sender,
  receiver: styles.receiver,
}

const ChatMessage = ({ text, iconUrl, messageType }: ChatMessageProps) => {
  const messageTypeClassName = React.useMemo(() => messageTypeClass[messageType], [messageType]);
  return (
    <div className={`${styles.message_area} ${messageTypeClassName}`}>
      <Image src={iconUrl} alt="icon" width={50} height={50} />
      <span className={styles.text_area}>
        {text}
      </span>
    </div>
  )
}

export default ChatMessage;