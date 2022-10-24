import styles from './Login.module.css';
import { useState } from 'react';

export default function Login({ user, newUser }) {
  const [ createData, setCreateData] = useState({
    username: '',
    password: '',
    password_confirmation: ''
  });
  const [ loginData, setLoginData ] = useState({
    username: '',
    password: ''
  })

  function loginFormChange(e) {
    e.
  }

  function handleCreate(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.loginBox}>
      <form className={styles.login}>
        <h1 className={styles.loginTitle}>Log in</h1>
        <div className={styles.field}>
          <label>Email / Handle</label>
          <input type='email' value={loginData.username} onChange={(e) => setLoginData({...loginData, username: e.target.value})}></input>
        </div>
        <div className={styles.field} >
          <label>Password</label>
          <input type='text' value={loginData.password} onChange={loginFormChange}></input>
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
        <div className={styles.field}>
          <label>Password</label>
          <input type='text'></input>
        </div>
        <div className={styles.field}>
          <label>Password Confirmation</label>
          <input type='text'></input>
        </div>
        <button type='submit' className={styles.loginBtn} onSubmit={handleCreate}>Create account</button>
      </form>
    </div>
  )
}