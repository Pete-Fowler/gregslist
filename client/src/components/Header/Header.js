import styles from './Header.module.css';
import { Outlet, Link } from 'react-router-dom';

export default function Header() {

  return (
    <>
    <div className={styles.header}>
      <div className={styles.homeBtn}>
        <Link to='/'>GL</Link>
      </div>
    </div>
    <Outlet />
    </>
  )
}