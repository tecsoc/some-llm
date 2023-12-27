import ChatArea from "@/app/ChatArea/ChatArea";
import TextInput from "@/app/_atoms/TextInput/TextInput";
import React from "react";
import styles from "./ChatBlock.module.scss";

const ChatBlock: React.FC = () => {
  return (
    <div className={styles.body_container}>
      <ChatArea messages={[
        { text: 'Hello World', messageType: 'sender', iconUrl: '/user-icon1.png' },
        { text: 'Hello World2', messageType: 'receiver', iconUrl: '/user-icon2.png' },
      ]} />
      <div className={styles.input_area_wrapper}>
        <div className={styles.input_area}>
          <TextInput className={styles.text_input}  placeholder="Type a message" />
          <button className={styles.send_button}>Send</button>
        </div>
      </div>
    </div>
  )
};

export default React.memo(ChatBlock);