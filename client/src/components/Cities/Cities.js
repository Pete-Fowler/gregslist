import styles from './Cities.module.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'



export default function Cities({id, name}) {


  return <div>
        <Link className={styles.city}>{name}</Link>
    </div>
  
}

