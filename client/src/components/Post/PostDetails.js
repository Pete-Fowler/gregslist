import styles from './PostListings.module.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

export default function PostDetails() {

  const [postObject, setPostObject] = useState({})

  const navigate = useNavigate()
  const { id } = useParams();

  const ref = useRef(history);

  useEffect(() => {
    fetch(`/posts/${id}`)
    .then(r=>r.json()).then((data)=>{
      setPostObject(data)
    })
  }, [id])

  console.log()
  return (
    <div></div>
  )
}