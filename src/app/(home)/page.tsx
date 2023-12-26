import ChatMessage from '../_atoms/ChatMessage/ChatMessage';
import TextInput from '../_atoms/TextInput/TextInput';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.body_container}>
        <div className={styles.message_list}>
          <ChatMessage text="Hello World" messageType='sender'iconUrl='/user-icon1.png' /> 
          <ChatMessage text="Hello World2" messageType='receiver' iconUrl='/user-icon2.png' />
        </div>
        <div className={styles.input_area_wrapper}>
          <div className={styles.input_area}>
            <TextInput className={styles.text_input}  placeholder="Type a message" />
            <button className={styles.send_button}>Send</button>
          </div>
        </div>
        </div>
    </main>
  )
}
