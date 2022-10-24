import styles from './Post.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Post({ user }) {

  const navigate = useNavigate()

  const [cat, setCat] = useState("")
  const [subcat, setSubcat] = useState("")
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [city, setCity] = useState("")
  const [postal, setPostal] = useState("")
  const [description, setDescription] = useState("")
  const [email, setEmail] = useState("")

  function selectCat(event) {
    setCat(event.target.value)
    console.log(cat)
  }

  function handleTitle(event) {
    setTitle(event.target.value)
    console.log(title)
  }

  function handlePrice(event) {
    setPrice(event.target.value)
    console.log(price)
  }

  function handleCity(event) {
    setCity(event.target.value)
    console.log(city)
  }

  function handlePostal(event) {
    setPostal(event.target.value)
    console.log(postal)
  }

  function handleDescription(event) {
    setDescription(event.target.value)
    console.log(description)
  }

  function handleEmail(event) {
    setEmail(event.target.value)
    console.log(email)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newPost = {

        "city_id": 1,
        "user_id": user.id,
        "title": title,
        "description": description,
        "category": cat,
        "area": city,
        "subcategory": subcat,
        "postal_code": postal,
        "price": price
    }

    fetch("/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
    .then(r => r.json())
    .then((data) => {
      console.log(data)
    })
    .then(data => {
      navigate(`/`)
    })

}


  return (
    <div className={styles.post}>
      <form className={styles.form} onSubmit={handleSubmit}>
      <label for="categories" className={styles.categorylabel}>choose a category:</label>
      <select className={styles.categories} onChange={selectCat}>
        <option value="for sale">for sale</option>
        <option value="jobs">jobs</option>
        <option value="services">services</option>
        <option value="housing">housing</option>
        <option value="community">community</option>
        <option value="events">events</option>
      </select>
        <div className={styles.groupcontainer}>
      <label for="postingtitle" className={styles.postlabel}>posting title
      <input type='text' className={styles.postingtitle} onChange={handleTitle}/>
      </label>
      <label for="price" className={styles.pricelabel}>price
      <input type="number" className={styles.price} title="Please enter a number" onChange={handlePrice}/>
      </label>
      <label for="cityorneighborhood" className={styles.citylabel}>city or neighborhood
      <input type='text' className={styles.city} onChange={handleCity}/>
      </label>
      <label for="postalcode" className={styles.postallabel}>postal code
      <input type='text' className={styles.postalcode} onChange={handlePostal}/>
      </label>
      </div>
      <div className={styles.descriptioncontainer}>
      <label htmlFor="description" className={styles.descriptionlabel}>description
      <textarea className={styles.description} onChange={handleDescription}></textarea>
      </label>
      </div>
      <div className={styles.contactcontainer}>
      <label for="contactinfo" className={styles.contactlabel}>contact info
      <label for="contactinfo" className={styles.emaillabel}>email
      <input type ='text' className={styles.contactinfo} placeholder='Your email address' onChange={handleEmail}/>
      </label>
      </label>
      </div>
      <div className={styles.checkboxcontainer}>
      <label for="checkbox">
      <input type="checkbox" className={styles.checkbox}/>
      ok for others to contact you about other services, products or commercial interests
      </label>
      </div>
      <button className={styles.button} type="submit">Continue</button>
      </form>
    </div>
  )
}