import styles from './PostListings.module.css';
import { Link } from 'react-router-dom';
import { formatWithOptions } from 'date-fns/fp';
import { enUS } from 'date-fns/locale'


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

  const date = created.substring(5, 10)



  return (

    
    <Link to={path} className={styles.postcardcontainer}>
        <img src={image} alt="item" width="500" height="600" className={styles.image}/>
        <span className={styles.price}>${price}</span>
        <span className={styles.cat}>{category}</span>

        <div className={styles.metacontainer}>
          <span>
          <span>☆</span>
          <span>{date}</span>
          <h3 className={styles.h3}>{title}</h3>
          <span className={styles.price2}>${price}</span>
          <span className={styles.area}>({area})</span>
          </span>
        </div>
    </Link>
  )
}