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
        <Link to='/posts-create' className={styles.posting}>create a posting</Link>
        <Link to={path}>my account</Link>  
      </div>
      {/* ==========MAIN / CENTER============= */}
      <div className={styles.main}>
        <div className={styles.header}>
          <Link>denver, CO</Link>
        </div>
        <div className={styles.mainContentBox}>
          <div className={styles.col1}>
            <div className={`${styles.section} ${styles.community}`}>
              <Link>community</Link>
            </div>
            <div className={`${styles.section} ${styles.services}`}>
              <Link>services</Link>
            </div>
          </div>
          <div className={styles.col2}>
            <div className={`${styles.section} ${styles.housing}`}>
              <Link>housing</Link>
            </div>
            <div className={`${styles.section} ${styles.forSale}`}>
              <Link>for sale</Link>
            </div>
          </div>
          <div className={styles.col3}>
            <div className={`${styles.section} ${styles.jobs}`}>
              <Link>jobs</Link>
            </div>
          </div>
        </div>
      </div>
      {/* ============RIGHT BAR================ */}
      <div className={styles.rightBar}>Right bar</div>
    </div>
  )
}
