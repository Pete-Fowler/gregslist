import styles from "./MyAccount.module.css";
import { useEffect } from "react";
import { format } from "date-fns";
import useHidden from "../../Hooks/useHidden";

export default function HiddenListing({ user, newUser, post, showPost }) {
  const { hidden, checkIfHidden, handleHideClick } = useHidden();

  useEffect(() => {
    checkIfHidden(user, post);
  });
  return (
    <div key={post.id} className={styles.starred}>
      <div className={styles.manage}>
        <button onClick={() => showPost(post.id)}>display</button>
        <button onClick={() => handleHideClick(user, post, newUser)}>
          un-hide
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
