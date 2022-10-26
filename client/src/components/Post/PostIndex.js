import styles from './PostIndex.module.css';
import { useState, useEffect } from 'react';
import PostListings from './PostListings'


export default function Post() {

  const [searchResults, setSearchResults ] = useState([]);

  useEffect(() => {
    fetch("/posts")
    .then(res => res.json())
    .then(data => {
      setSearchResults(data)
    });
  }, [])


  return <div className={styles.resultscontainer}>
    {searchResults.slice(0,25).map(post => <PostListings
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
      created={post.created_at}
      updated={post.updated_at}
    />)}
    </div>

}