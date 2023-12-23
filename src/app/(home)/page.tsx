import ChatMessage from '../_feature/ChatMessage/ChatMessage';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.message_list}>
        <ChatMessage text="Hello World" messageType='sender'iconUrl='/user-icon1.png' /> 
        <ChatMessage text="Hello World2" messageType='receiver' iconUrl='/user-icon2.png' />
      </div>
    </main>
  )
}
