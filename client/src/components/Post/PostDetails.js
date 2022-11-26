import styles from "./PostDetails.module.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatDistance } from "date-fns";
import useStar from "../../Hooks/useStar.js";
import useHidden from "../../Hooks/useHidden.js";

export default function PostDetails({ user, newUser }) {
  const [post, setPost] = useState({});

  const { id } = useParams();

  const { starred, checkIfStarred, handleStarClick } = useStar();
  const { hidden, checkIfHidden, handleHideClick } = useHidden();

  const today = new Date();

  // Fetch post
  useEffect(() => {
    fetch(`/posts/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => setPost(data));
      } else {
        r.json().then((err) => console.log(err));
      }
    });
  }, [id]);

  function mailTo() {
    window.open(`mailto:${post ? post.user.username : ""}`);
  }

  // Returns timestamp JSX
  function postedAt() {
    return (
      <span>
        posted:{" "}
        {post.created_at ? (
          <span className={styles.underlined}>
            {formatDistance(new Date(post.created_at), today)} ago
          </span>
        ) : null}
      </span>
    );
  }

  // Set starred & hidden posts states
  useEffect(() => {
    checkIfStarred(user, post);
    checkIfHidden(user, post);
  }, [post, user, checkIfStarred, checkIfHidden]);

  return (
    <div className={styles.postBox}>
      <div className={styles.nav}></div>
      <div className={styles.postControls}>
        <br></br>
        <button onClick={mailTo} className={styles.replyBtn}>
          Reply
        </button>
        <div className={styles.iconBox}>
          <div
            className={`${styles.star} ${starred ? styles.active : ""} ${
              styles.icon
            }`}
            onClick={() => handleStarClick(user, post, newUser)}
          >
            ☆
          </div>
          <div>favorite</div>
        </div>
        <div className={styles.iconBox}>
          <div
            className={`${styles.icon} ${hidden ? styles.active : ""}`}
            onClick={() => handleHideClick(user, post, newUser)}
          >
            🗑
          </div>
          <div>hide</div>
        </div>
        {postedAt()}
        <div className={styles.print} onClick={() => window.print()}>
          print
        </div>
      </div>
      <h3>
        {post.title} - ${post.price}{" "}
        <span className={styles.area}>({post.area})</span>
      </h3>
      <img src={post.image} alt="item" width="400" height="400" />
      <p>{post.description}</p>
      <p className={styles.indent}>
        • do NOT contact me with unsolicited services or offers
      </p>
      <div className={styles.metadata}>
        <span>post id: {post.id}</span>
        {postedAt()}
        <span>
          updated:{" "}
          {post.updated_at ? (
            <span className={styles.underlined}>
              {formatDistance(new Date(post.created_at), today)} ago
            </span>
          ) : null}
        </span>
      </div>
    </div>
  );
}
