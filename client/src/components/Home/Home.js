import styles from './Home.module.css';

export default function Home() {

  return (
    <div className={styles.home}>
      <div className={styles.leftBar}>Left-bar</div>
      <div className={styles.main}>Main</div>
      <div className={styles.rightBar}>Right bar</div>
    </div>
  )
}