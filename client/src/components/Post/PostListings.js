import styles from "./PostListings.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import useStar from "../../Hooks/useStar";
import useHidden from "../../Hooks/useHidden";

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
  user,
  post,
  newUser,
}) {
  const { starred, checkIfStarred, handleStarClick } = useStar();
  const { hidden, checkIfHidden, handleHideClick } = useHidden();

  const path = `/posts/${id}`;

  const date = new Date(created);

  function truncate(str) {
    return str.slice(0, 35) + "...";
  }

  useEffect(() => {
    checkIfStarred(user, post);
    checkIfHidden(user, post);
  }, [user, post, checkIfStarred, checkIfHidden]);

  if (hidden) {
    return "";
  }

  return (
    <Link to={path} className={styles.postcardcontainer}>
      <img
        src={image}
        alt="item"
        width="500"
        height="600"
        className={styles.image}
      />
      <span className={styles.price}>${price}</span>
      <span className={styles.cat}>{category}</span>
      <div className={styles.metacontainer}>
        <span
          className={`${styles.star} ${starred ? styles.active : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleStarClick(user, post, newUser);
          }}
        >
          ☆
        </span>
        <span>
          <span className={styles.date2}>{format(date, "MMM d")}</span>
          <span className={styles.title}>{truncate(title)}</span>
          <span className={styles.price2}>${price}</span>
          <span className={styles.area}>({area})</span>
        </span>
        <span
          className={`${styles.hide} ${hidden ? styles.active : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleHideClick(user, post, newUser);
          }}
        >
          🗑
        </span>
      </div>{" "}
    </Link>
  );
}
