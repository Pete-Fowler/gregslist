import styles from './Search.module.css';
import PostListings from '../Post/PostListings';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Search() {
  const [ results, setResults ] = useState([]);
  const [ errors, setErrors ] = useState([]);
  const { term } = useParams();

  useEffect(() => {
    fetch(`/posts?q=${term}`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => setResults(data));
      } else {
        r.json().then(err => setErrors(err.errors));
      }
    })
  }, [])

  return (
    <div className={styles.main}>
      {results.slice(0,25).map(post => <PostListings
      key={post.id}
      id={post.id}
      title={post.title}
      description={post.description}
      image={post.image}
      category={post.category}
      price={post.price}
      area={post.area}
      postal={post.postal_code}
      posterId={post.user_id}
      cityId={post.city_id}
    />)}
    </div>
  )
}