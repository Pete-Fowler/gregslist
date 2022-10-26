import styles from './PostDetails.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

export default function PostDetails() {

  const [postObject, setPostObject] = useState({})

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/posts/${id}`)
    .then(r => {
      if(r.ok) {
        r.json().then((data)=>setPostObject(data))
      } else {
        alert('Error: not found');
      }
    });
  }, [id])

  
  return (
    <div>
      <h1>{postObject.title}</h1>
        <img src={postObject.image} alt="item" width="500" height="600"/>
        <p>{postObject.category}</p>
        <p>{postObject.price}</p>
        <p>{postObject.area}</p>
        <p>{postObject.postal_code}</p>
        <p>{postObject.description}</p>
        <p>{postObject.user_id}</p>
        <p>{postObject.city_id}</p>
        <button onClick={()=>{navigate(`/posts`)}}>return to all posts</button>
    </div>
  )
}