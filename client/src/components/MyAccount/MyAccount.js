import styles from './MyAccount.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

export default function MyAccount({ user, newUser }) {
  const [ errors, setErrors ] = useState([]);
  const navigate = useNavigate();

  function logout() {
    fetch('/destroy', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({username: user.username}) 
    })
    .then(r => {
      if(r.ok) {
        newUser(null);
        navigate('/login');
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    })
  }

  return (
    <div className={styles.account}>
      <div className={styles.header}>
      <div className={styles.homeBtn}>
        <Link to='/'>GL</Link>
      </div>
      <div>home of {user.username}</div>
    </div>
      <h1>{user && user.username}</h1>
      <button onClick={logout}>Log out</button>
      {errors.map(err => <span key={err}>{err}</span>)}
    </div>
  )
}