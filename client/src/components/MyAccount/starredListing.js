

export default function starredListing() {
  return (
    <div key={post.id} className={styles.starred}>
      <div className={styles.manage}>
        <button onClick={() => showPost(post.id)}>display</button>
        <button>un-star</button>
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
