import styles from './Header.module.css';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  function navHome() {
    navigate('/');
  }

  return (
    <>
    <div className={styles.header}>
      <button className={styles.homeBtn} onClick={navHome}>GL</button>
    </div>
    <Outlet />
    </>
  )
}