import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home({ user }) {

  const path = user ? '/account' : '/login';

  return (
    <div className={styles.home}>
      {/* ================LEFT BAR============ */}
      <div className={styles.leftBar}>
        <Link className={styles.siteTitle}>gregslist</Link>
        <br></br>
        <Link className={styles.posting}>create a posting</Link>
        <Link to={path}>my account</Link>  
      </div>
      {/* ==========MAIN / CENTER============= */}
      <div className={styles.main}>
        <div className={styles.header}>
          <Link>denver, CO</Link>
        </div>
      </div>
      {/* ============RIGHT BAR================ */}
      <div className={styles.rightBar}>Right bar</div>
    </div>
  )
}