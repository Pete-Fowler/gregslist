import styles from './MyAccount.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

export default function MyAccount({ user, newUser }) {
  const [ errors, setErrors ] = useState([]);
  const [ posts, setPosts ] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if(user !== null) {
    fetch(`/posts?my_id=${user.id}`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => setPosts(data));
      } else {
        r.json().then(err => setErrors(err.error));
      }
    })}
  }, [user])

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

  function deletePost(id) {
    fetch(`/posts/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => {
      if(r.ok) {
        setPosts(posts => posts.filter(post => post.id !== id));
      } else {
        r.json().then(err => setErrors(err));
      }
    })
  }

  function showPost(id) {
    navigate(`/posts/${id}`);
  }

  function editPost(id) {
    navigate(`/posts-edit/${id}`);
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
      
    <Link className={styles.newPost} to='/posts-create'>New Post</Link>
    <div className={styles.posts}>
      <div className={styles.post}>
        <div className={`${styles.manage} ${styles.heading}`}>manage</div>
        <div className={`${styles.title} ${styles.heading}`}>post title</div>
        <div className={`${styles.area} ${styles.heading}`}>area and category</div>
        <div className={`${styles.date} ${styles.heading}`}>posted date</div>
      </div>
      {posts.map(post => <div key={post.id} className={styles.post}>
        <div className={styles.manage}>
          <button onClick={() => showPost(post.id)}>display</button>
          <button onClick={() => deletePost(post.id)}>delete</button>
          <button onClick={() => editPost(post.id)}>edit</button>
        </div>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.area}><b>{post.area}</b> {post.category}</div>
        <div className={styles.date}>{format(new Date(post.created_at), 'dd MMM yyyy k:mm')}</div>
      </div>)}
    </div>
      {errors.map(err => <span key={err}>{err}</span>)}
    </div>
  )
}
