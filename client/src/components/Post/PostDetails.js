import styles from './PostDetails.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

export default function PostDetails() {

  const [ post, setPost ] = useState({})

  const { id } = useParams();

  const navigate = useNavigate();

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

  
  return (
    <div className={styles.postBox}>
      <h3>{post.title} - {post.price} <span className={styles.area}>({post.area})</span></h3>
      <img src={post.image} alt="item" width="400" height="400"/>
      <p>{post.category}</p>
      <p>{post.price}</p>
      <p>{post.area}</p>
      <p>{post.postal_code}</p>
      <p>{post.description}</p>
      <p>{post.user_id}</p>
      <p>{post.city_id}</p>
      <button onClick={()=>{navigate(`/posts`)}}>return to all posts</button>
    </div>
  )
}