import styles from './PostListings.module.css';
import { Link } from 'react-router-dom';
import { startTransition } from 'react';


export default function PostListings({
  id, 
  title,
  image,
  category,
  price,
  area,
  postal,
  created,
  updated
  }) {

  const path = `/posts/${id}`

  console.log(created)

  return (

    
    <Link to={path} className={styles.postcardcontainer}>
        <img src={image} alt="item" width="500" height="600" className={styles.image}/>
        <span className={styles.price}>${price}</span>
        <span className={styles.cat}>{category}</span>

        <div className={styles.metacontainer}>
          <span>
          <span className={styles.star}>✰</span>
          <time className={styles.date}>{created}</time>
          <span className={styles.h3}>{title}</span>
          <span className={styles.price2}>${price}</span>
          <span className={styles.area}>({area})</span>
          </span>
        </div>
    </Link>
  )
}