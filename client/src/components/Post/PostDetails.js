import styles from './PostDetails.module.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

export default function PostDetails({title,
  description,
  image,
  category,
  price,
  area,
  postal,
  posterId,
  cityId}) {


  return (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{image}</p>
        <p>{category}</p>
        <p>{price}</p>
        <p>{area}</p>
        <p>{postal}</p>
        <p>{posterId}</p>
        <p>{cityId}</p>

    </div>
  )
}