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

  return (
    <Link to={path} className={styles.postcardcontainer}>
        <a href={image} alt="item" width="500" height="600" className={styles.image}/>
        <span className={styles.price}>{price}</span>
        
        <div className={styles.metacontainer}>
        
        <span>star.svg</span>
        <time>Oct 26 (render date)</time>
        <h3 className={styles.h3}>{title}</h3>
        <span>{price}</span>
        <span>({area})</span>
        </div>
    </Link>
  )
}