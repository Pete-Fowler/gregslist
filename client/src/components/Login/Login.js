import styles from './Login.module.css';

export default function Login() {

  return (
    <div className={styles.loginBox}>
      <form className={styles.login}>
        <h1 className={styles.loginTitle}>Log in</h1>
        <div className={styles.field}>
          <label>Email / Handle</label>
          <input type='email'></input>
        </div>
        <div className={styles.field}>
          <label>Password</label>
          <input type='text'></input>
        </div>
        <button type='submit' className={styles.loginBtn}>Log in</button>
      </form>
      <p><i>or</i></p>
      <form className={styles.create}>
        <h1 className={styles.createTitle}>Create an account</h1>
        <div className={styles.field}>
          <label>Email</label>
          <input type='email'></input>
        </div>
        <button type='submit' className={styles.loginBtn}>Create account</button>
      </form>
    </div>
  )
}