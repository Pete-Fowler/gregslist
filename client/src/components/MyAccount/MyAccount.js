import styles from './MyAccount.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MyAccount({ user, newUser }) {
  const [ errors, setErrors ] = useState([]);
  const [ posts, setPosts ] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch()
  }, [posts])

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
      <div>home of {user ? user.username : null}</div>
      <button className={styles.logoutBtn} onClick={logout}>[ Log out ]</button>
    </div>
      
    <div className={styles.posts}>

    </div>
      {/* {errors.map(err => <span key={err}>{err}</span>)} */}
    </div>
  )
}