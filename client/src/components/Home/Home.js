import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home({ user }) {

  return (
    <div className={styles.home}>
      <div className={styles.leftBar}>
        <Link className={styles.siteTitle}>gregslist</Link>
        <br></br>
        <Link className={styles.posting}>create a posting</Link>
        <Link to={user ? '/account' : '/login'}>my account</Link>  
      </div>
      <div className={styles.main}>Main</div>
      <div className={styles.rightBar}>Right bar</div>
    </div>
  )
}