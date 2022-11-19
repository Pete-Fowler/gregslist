import styles from "./Cities.module.css";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function Cities({ id, name }) {
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/search/${name}`);
  }

  return (
    <div>
      <Link className={styles.city} onClick={handleSearch}>
        {name}
      </Link>
    </div>
  );
}
