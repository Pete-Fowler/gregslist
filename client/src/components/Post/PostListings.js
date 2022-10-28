import styles from './PostListings.module.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

export default function PostListings({
  id, 
  title,
  image,
  category,
  price,
  area,
  postal,
  created,
  updated, 
  user
  }) {

  const [ starred, setStarred ] = useState(false);
  const navigate = useNavigate();
  const path = `/posts/${id}`
  
  const date = new Date(created);

  function truncate(str) {
    return str.slice(0,35) + '...';
  }

  function handleStarClick(e) {
    e.stopPropagation();
    setStarred(starred => !starred);
   
    const body = starred ? {unstar: id} : {star: id};

    if(user) {
      fetch(`/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
      .then(r => {
        if(r.ok) {
          r.json().then(data => {
            console.log(data)
          });
        } else {
          r.json().then(err => console.log(err));
        }
      })
    } else {
      navigate('/login');
    }
  }

  useEffect(() => {
      if(user && user.starred.includes(id)) {
      setStarred(true);
    }
  }, [])

console.log(user && user.starred, user)

  return (
    <Link to={path} className={styles.postcardcontainer}>
        <img src={image} alt="item" width="500" height="600" className={styles.image}/>
        <span className={styles.price}>${price}</span>
        <span className={styles.cat}>{category}</span>
        <div className={styles.metacontainer}>
          {/* <span className={`${styles.star} ${starred ? styles.active : ''}`} onClick={handleStarClick}>☆</span> */}
          <span className={styles.date2}>{format(date, 'MMM d')}</span>
          <span className={styles.title}>{truncate(title)}</span>
          <span className={styles.price2}>${price}</span>
          <span className={styles.area}>({area})</span>
        </div>
    </Link>
  )
}