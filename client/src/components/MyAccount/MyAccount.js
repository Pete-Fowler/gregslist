import styles from './MyAccount.module.css';

export default function MyAccount({ user, logout }) {

  return (
    <div className={styles.account}>
      <h1>{user && user.username}</h1>
      <button onClick={logout}>Log out</button>
    </div>
  )
}