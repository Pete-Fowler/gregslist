import styles from "./Search.module.css";
import PostListings from "../Post/PostListings";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Search({ user, newUser }) {
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState([]);
  const { term } = useParams();

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Code to hide posts when setting data, needs editing
    // user.hiddens.filter(el => el.post_id === post.id)[0].id

    fetch(`/posts?q=${term}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => setResults(data));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }, []);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    fetch(`/posts?q=${searchTerm}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setResults(data);
          navigate(`/search/${searchTerm}`);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch}>
        <input
          className={styles.search}
          type="text"
          placeholder="search gregslist"
          value={searchTerm}
          onChange={handleChange}
        ></input>
      </form>
      <div className={styles.resultsContainer}>
        {results.slice(0, 25).map((post) => (
          <PostListings
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
            user={user}
            post={post}
            newUser={newUser}
          />
        ))}
        {errors.map((err) => (
          <div key={err}>{err}</div>
        ))}
      </div>
    </div>
  );
}
