import styles from './Search.module.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Search() {

  const { term } = useParams();

  useEffect(() => {
    fetch(`/`)
  }, [])

  return (
    <div className={styles.main}>

    </div>
  )
}