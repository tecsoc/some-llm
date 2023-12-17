import styles from "./layout.module.scss"

type HomeLayoutProps = {
  children: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className={styles.bodyContainer}>
      <aside className={styles.historyMenu}>
        <h1>ChooseGPT</h1>
        <h2>History</h2>
      </aside>
      {children}
    </div>
  )
}

export default HomeLayout;