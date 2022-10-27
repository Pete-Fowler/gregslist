import styles from './PostDetails.module.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { formatDistance } from 'date-fns';

export default function PostDetails({ user }) {
  const [ starred, setStarred ] = useState(false);
  const [ post, setPost ] = useState({})

  const { id } = useParams();

  const navigate = useNavigate();
  
  const today = new Date();

  useEffect(() => {
    fetch(`/posts/${id}`)
    .then(r => {
      if(r.ok) {
        r.json().then((data)=>setPost(data))
      } else {
        alert('Error: not found');
      }
    });
  }, [id])

  function mailTo() {
    window.open(`mailto:${post ? post.user.username : ''}`);
  }

  function postedAt() {
    return <span>posted: {post.created_at
      ? <span className={styles.underlined}>{formatDistance(new Date(post.created_at), today)} ago</span>
      : null}
    </span>
  }

  function handleStarClick(e) {
    setStarred(true);
    e.target.classList.add('starred');
   
    if(user) {
      fetch(`/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({star: post.id})
      })
      .then(r => {
        if(r.ok) {
          r.json().then(data => console.log(data));
        } else {
          r.json().then(err => console.log(err));
        }
      })
    } else {
      navigate('/login');
    }
  }

console.log(post)

  return (
    <div className={styles.postBox}>
      <div className={styles.nav}>

      </div>
      <div className={styles.postControls}>
        <br></br>
        <button onClick={mailTo} className={styles.replyBtn}>Reply</button>
        <div className={styles.iconBox}>
          <div className={`${styles.star} ${styles.icon}`} onClick={handleStarClick}>☆</div> 
          <div>favorite</div>
        </div>
        <div className={styles.iconBox}>
          <div className={styles.icon}>🗑</div> 
          <div>hide</div>
        </div>
        {/* <div className={styles.iconBox}>
          <div className={`${styles.icon} ${styles.flag}`}>🏳️</div> 
          <div className={styles.flagText}>flag</div>
        </div>
        <div className={styles.iconBox}>
          <div className={`${styles.icon} ${styles.flag}`}>🔗</div>
          <div className={styles.flagText}>share</div>
        </div> */}
        {postedAt()}
        <div className={styles.print} onClick={() => window.print()}>print</div>
      </div>
      <h3>{post.title} - ${post.price} <span className={styles.area}>({post.area})</span></h3>
      <img src={post.image} alt="item" width="400" height="400"/>
      <p>{post.description}</p>
      <p className={styles.indent}>• do NOT contact me with unsolicited services or offers</p>
      <div className={styles.metadata}>
        <span>post id: {post.id}</span>
        {postedAt()}
        <span>updated: {post.updated_at
          ? <span className={styles.underlined}>{formatDistance(new Date(post.created_at), today)} ago</span>
          : null}
        </span>
      </div>
    </div>
  )
}

