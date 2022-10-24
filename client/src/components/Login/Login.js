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
    setLoginData({...loginData, [e.target.name]: e.target.value});
  }

  function createFormChange(e) {
    setCreateData({...createData, [e.target.name]: e.target.value})
  }

  function handleCreate(e) {
    e.preventDefault();
    console.log(createData);
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(createData)
    })
    .then(res => res.json())
    .then(data => newUser(data));
  }

  
  return (
    user ? <h1>my account</h1> 
    : <div className={styles.loginBox}>
      <form className={styles.login}>
        <h1 className={styles.loginTitle}>Log in</h1>
        <div className={styles.field}>
          <label>Email / Handle</label>
          <input type='email' name='username' value={loginData.username} onChange={loginFormChange}></input>
        </div>
        <div className={styles.field} >
          <label>Password</label>
          <input type='text' name='password'value={loginData.password} onChange={loginFormChange}></input>
        </div>
        <button type='submit' className={styles.loginBtn}>Log in</button>
      </form>
      <p><i>or</i></p>
      <form className={styles.create} onSubmit={handleCreate}>
        <h1 className={styles.createTitle}>Create an account</h1>
        <div className={styles.field}>
          <label>Email</label>
          <input type='email' name='username' onChange={createFormChange}></input>
        </div>
        <div className={styles.field}>
          <label>Password</label>
          <input type='text' name='password' onChange={createFormChange}></input>
        </div>
        <div className={styles.field}>
          <label>Password Confirmation</label>
          <input type='text' name='password_confirmation' onChange={createFormChange}></input>
        </div>
        <button type='submit' className={styles.loginBtn}>Create account</button>
      </form>
    </div>
  )
}