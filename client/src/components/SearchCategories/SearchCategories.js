import styles from "./SearchCategories.module.css";
import PostListings from "../Post/PostListings";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function SearchCategories({
  filterCategory,
  filterSubCategory,
  user,
}) {
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState([]);
  const { term } = useParams();

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/posts-categories?q=${term}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setResults(
            data.filter(
              (post) =>
                user.hiddens.filter((el) => el.post_id === post.id)[0].id
            )
          ); // wrong
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }, [term]);

  const filteredResults = results.filter(
    (result) =>
      result.subcategory.includes(filterSubCategory) &&
      result.category.includes(filterCategory)
  );

  console.log(filteredResults);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    fetch(`/posts?q=${searchTerm}`)
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => setResults(data));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      })
      .then(navigate(`/search/${searchTerm}`));
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
        {filteredResults.slice(0, 25).map((post) => (
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
          />
        ))}
        {errors.map((err) => (
          <div key={err}>{err}</div>
        ))}
      </div>
    </div>
  );
}
