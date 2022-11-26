import styles from "./MyAccount.module.css";
import { format } from "date-fns";
import useStar from "../../Hooks/useStar";
import { useEffect } from "react";

export default function StarredListing({ user, newUser, post, showPost }) {
  const { checkIfStarred, handleStarClick } = useStar();

  useEffect(() => {
    checkIfStarred(user, post);
  }, [user, post, checkIfStarred]);

  return (
    <div className={styles.starred}>
      <div className={styles.manage}>
        <button onClick={() => showPost(post.id)}>display</button>
        <button onClick={() => handleStarClick(user, post, newUser)}>
          un-star
        </button>
      </div>
      <div className={styles.title}>{post.title}</div>
      <div className={styles.area}>
        <b>{post.area}</b> {post.category}
      </div>
      <div className={styles.date}>
        {format(new Date(post.created_at), "dd MMM yyyy k:mm")}
      </div>
    </div>
  );
}
