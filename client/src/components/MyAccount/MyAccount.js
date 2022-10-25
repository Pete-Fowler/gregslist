import styles from './MyAccount.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MyAccount({ user, newUser }) {
  const [ errors, setErrors ] = useState([]);
  const [ posts, setPosts ] = useState([]);

  const navigate = useNavigate();
console.log(user.id);
  useEffect(() => {
    fetch(`/posts?my_id=${user.id}`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => setPosts(data));
      } else {
        r.json().then(err => setErrors(err));
      }
    })
  }, [])



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
      {posts.map(post => <div key={post.id} className={styles.post}>
        <div className={styles.manage}>
          <Link>display</Link>
          <Link>delete</Link>
          <Link>edit</Link>
        </div>
        <div className={styles.title}>{post.title}</div>
      </div>)}
    </div>
      {errors.map(err => <span key={err}>{err}</span>)}
    </div>
  )
}