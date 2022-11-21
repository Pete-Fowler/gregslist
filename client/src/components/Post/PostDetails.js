import styles from "./PostDetails.module.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatDistance } from "date-fns";

export default function PostDetails({ user, newUser }) {
  // const [starred, setStarred] = useState(false);
  const [post, setPost] = useState({});
  const [hidden, setHidden] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

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
  }, []);

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

  function handleStarClick() {
    setStarred((starred) => !starred);

    const body = starred ? { unstar: post.id } : { star: post.id };

    if (user) {
      fetch(`/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((r) => {
        if (r.ok) {
          r.json().then((data) => newUser(data));
        } else {
          r.json().then((err) => console.log(err));
        }
      });
    } else {
      navigate("/login");
    }
  }

  // Set starred & hidden posts states
  // useEffect(() => {
  //   if (user) {
  //     if (user.starred.includes(post.id)) {
  //       setStarred(true);
  //     }
  //   }
  // }, [post, user]);

  function handleHideClick() {
    if (user) {
      setHidden((hidden) => !hidden);
      const method = hidden ? "DELETE" : "POST";
      const hiddenId = hidden
        ? `${user.hiddens.filter((el) => el.post_id === post.id)[0].id}`
        : ""; // need hidden ID
      const body = hidden
        ? ""
        : JSON.stringify({ user_id: user.id, post_id: post.id });

      fetch(`/hiddens/${hiddenId}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      }).then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            console.log(data);
            navigate("/");
          });
        } else {
          r.json().then((err) => {
            setHidden((hidden) => !hidden);
            alert(err.error);
          });
        }
      });
    } else {
      navigate("/login");
    }
  }

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
            onClick={handleStarClick}
          >
            ☆
          </div>
          <div>favorite</div>
        </div>
        {/* <div className={styles.iconBox}>
          <div className={`${styles.icon} ${hidden ? styles.active : ''}`} onClick={handleHideClick}>🗑</div> 
          <div>hide</div>
        </div> */}
        {/* <div className={styles.iconBox}>
          <div className={`${styles.icon} ${styles.flag}`}>🏳️</div> 
          <div className={styles.flagText}>flag</div>
        </div>
        <div className={styles.iconBox}>
          <div className={`${styles.icon} ${styles.flag}`}>🔗</div>
          <div className={styles.flagText}>share</div>
        </div> */}
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
