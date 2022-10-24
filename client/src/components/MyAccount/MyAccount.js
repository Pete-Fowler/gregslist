import styles from './MyAccount.module.css';

export default function MyAccount({ user, logout }) {

  return (
    <div className={styles.account}>
      <button onClick={logout}>Log out</button>
    </div>
  )
}