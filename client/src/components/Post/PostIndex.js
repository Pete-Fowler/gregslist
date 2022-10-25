import styles from './PostIndex.module.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import PostDetails from './PostDetails'


export default function Post() {

  const { term } = useParams();

  const navigate = useNavigate()

  const [searchResults, setSearchResults ] = useState([]);

  useEffect(() => {
    fetch("/posts")
    .then(res => res.json())
    .then(data => {
      setSearchResults(data)
    });
  }, [])

  console.log(searchResults)
  
  return <div >
    {searchResults.map(post => <PostDetails
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

}