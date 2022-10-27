import styles from './PostDetails.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { formatDistance } from 'date-fns';

export default function PostDetails() {

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
    window.location.href = `mailto:${post.username}`
  }

  function postedAt() {
    return <span>posted: {post.created_at
      ? <span className={styles.underlined}>{formatDistance(new Date(post.created_at), today)} ago</span>
      : null}
    </span>
  }

  return (
    <div className={styles.postBox}>
      <div className={styles.nav}>

      </div>
      <div className={styles.postControls}>
        <br></br>
        <button className={styles.replyBtn} onClick={mailTo}>Reply</button>
        <div>favorite</div>
        <div>hide</div>
        <div>flag</div>
        <div>share</div>
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

