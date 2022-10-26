import styles from './Header.module.css';
import { Outlet, Link } from 'react-router-dom';

export default function Header({ user }) {

  const path = user ? '/account' : '/login';

  return (
    <>
    <div className={styles.header}>
      <div className={styles.homeBtn}>
        <Link to='/'>GL</Link>
      </div>
      <div className={styles.links}>
        <Link to='/posts-create'>post</Link> | <Link to={path}>account</Link>
      </div>
    </div>
    <Outlet />
    </>
  )
}