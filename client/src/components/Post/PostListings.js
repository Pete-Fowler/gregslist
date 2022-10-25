import styles from './PostListings.module.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

export default function PostListings({id, title,
  description,
  image,
  category,
  price,
  area,
  postal,
  posterId,
  cityId}) {

    const navigate = useNavigate()

  return (
    <div onClick={()=>{navigate(`posts/:id`)}}>
        <h1>{title}</h1>
        <img src={image} alt="item" width="500" height="600"/>
        <p>{category}</p>
        <p>{price}</p>
        <p>{area}</p>
        <p>{postal}</p>
        <p>{posterId}</p>
        <p>{cityId}</p>
    </div>
  )
}