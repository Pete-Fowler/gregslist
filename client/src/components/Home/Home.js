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
        <div className={styles.col1}>
          <div className={styles.section}>
            <div className={styles.subhead}><Link>community</Link></div>
            {communityContent}
          </div>
        </div>
      </div>
      {/* ============RIGHT BAR================ */}
      <div className={styles.rightBar}>Right bar</div>
    </div>
  )
}

function communityContent() {
  return (
    <div className={styles.sectionContent}>
      <Link>activities</Link>
      <Link>artists</Link>
      <Link>childcare</Link>
      <Link>classes</Link>
      <Link>events</Link>
      <Link>general</Link>
      <Link>groups</Link>
      <Link>local news</Link>
      <Link>lost+found</Link>
      <Link>missed connections</Link>
      <Link>musicians</Link>
      <Link>pets</Link>
      <Link>politics</Link>
      <Link>rants & raves</Link>
      <Link>rideshare</Link>
      <Link>volunteers</Link>
      <Link>services</Link>
    </div>
  )
}