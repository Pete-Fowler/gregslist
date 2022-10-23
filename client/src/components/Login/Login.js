import styles from './Login.module.css';

export default function Login() {

  return (
    <div className={styles.loginBox}>
      <form className={styles.login}>
        <div className={styles.loginTitle}>Log in</div>
      </form>
      <p>or</p>
      <div className={styles.createAccount}>create an account</div>
    </div>
  )
}