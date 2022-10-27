import styles from './EditPost.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

export default function EditPost({user}) {

  const [postObject, setPostObject] = useState({})

  const { id } = useParams();

  const [patch, setPatch] = useState(0);

  useEffect(() => {
    fetch(`/posts/${id}`)
    .then(r=>r.json()).then((data)=>{
      setPostObject(data)
      setTitle(data.title)
      setPrice(data.price)
      setCity(data.area)
      setPostal(data.postal_code)
      setDescription(data.description)
      setImage(data.image)
    })
  }, [id])



  function startPatch() {
    setPatch(1)
  }

  const navigate = useNavigate();
  
  const [cat, setCat] = useState(postObject.category)
  const [subcat, setSubcat] = useState("")
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [city, setCity] = useState("")
  const [postal, setPostal] = useState("")
  const [description, setDescription] = useState("")
  const [email, setEmail] = useState("")
  const [addImage, setAddImage] = useState(false)
  const [image, setImage] = useState("")

  function selectCat(event) {
    setCat(event.target.value)
  }

  function handleTitle(event) {
    setTitle(event.target.value)
  }

  function handlePrice(event) {
    setPrice(event.target.value)
  }

  function handleCity(event) {
    setCity(event.target.value)
  }

  function handlePostal(event) {
    setPostal(event.target.value)
  }

  function handleDescription(event) {
    setDescription(event.target.value)
  }

  function handleImage(event) {

    setImage(event.target.value)
  }

  function renderAddImageInput() {
      setPatch(1)
      setAddImage(!addImage)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const editedPost = {
        "city_id": 1,
        "user_id": user.id,
        "title": title,
        "image": image,
        "description": description,
        "category": cat,
        "area": city,
        "subcategory": subcat,
        "postal_code": postal,
        "price": price
    }

    fetch(`/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPost),
    })
    .then(r => r.json())
    .then((data) => {
      navigate(`/posts/${data.id}`)
    })
  }



  return (
    <div className={styles.post}>
      <form className={styles.form} onSubmit={handleSubmit} onChange={startPatch}>
      <label for="categories" className={styles.categorylabel}>choose a category:</label>
      <select className={styles.categories} onChange={selectCat} value={patch > 0 ? cat : postObject.category}>
        <option value="for sale">for sale</option>
        <option value="jobs">jobs</option>
        <option value="services">services</option>
        <option value="housing">housing</option>
        <option value="community">community</option>
        <option value="events">events</option>
      </select>
        <div className={styles.groupcontainer}>
      <label for="postingtitle" className={styles.postlabel}>posting title
      <input type='text' className={styles.postingtitle} onChange={handleTitle} value={patch > 0 ? title : postObject.title}/>
      </label>
      <label for="price" className={styles.pricelabel}>price
      <input type="number" className={styles.price} title="Please enter a number" onChange={handlePrice} value={patch > 0 ? price : postObject.price}/>
      </label>
      <label for="cityorneighborhood" className={styles.citylabel}>city or neighborhood
      <input type='text' className={styles.city} onChange={handleCity} value={patch > 0 ? city : postObject.area}/>
      </label>
      <label for="postalcode" className={styles.postallabel}>postal code
      <input type='text' className={styles.postalcode} onChange={handlePostal} value={patch > 0 ? postal : postObject.postal_code}/>
      </label>
      </div>
      <div className={styles.descriptioncontainer}>
      <label htmlFor="description" className={styles.descriptionlabel}>description
      <textarea className={styles.description} onChange={handleDescription} value={patch > 0 ? description : postObject.description}></textarea>
      </label>
      </div>
      <div className={styles.checkboxcontainer}>
      <input type="checkbox" className={styles.checkbox}/>
      <span className={styles.checkboxText}>
      ok for others to contact you about other services, products or commercial interests
      </span>
      </div>
      <button className={styles.button} type="submit">Continue</button>
      </form>
      <div className={styles.imagecontainer}>
      {addImage ? <label for="imageInput" className={styles.imagelabel}>add image
      <input type="text" className={styles.imageInput} onChange={handleImage} value={patch > 0 ? image : postObject.image}/>
      </label> : 
      <button onClick={renderAddImageInput} className={styles.imageButton}>Add Image</button>}
      </div>
    </div>
  )

}