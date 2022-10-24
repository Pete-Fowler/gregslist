import styles from './Post.module.css';
import { useState } from 'react';

export default function Post() {


  return (
    <div>
      <form className={styles.form}>
        <div className={styles.groupcontainer}>
      <label for="postingtitle" className={styles.postlabel}>posting title
      <input type='text' className={styles.postingtitle} />
      </label>
      <label for="cars" className={styles.categorylabel}>Choose a category:</label>
      <select className="categories">
        <option value="for sale">for sale</option>
        <option value="jobs">jobs</option>
        <option value="services">services</option>
        <option value="events">events</option>
      </select>
      <label for="price" className={styles.pricelabel}>price</label>
      <input type="number" className={styles.price} title="Please enter a number" />
      <label for="cityorneighborhood" className={styles.citylabel}>city or neighborhood
      <input type='text' className={styles.city} />
      </label>
      <label for="postalcode" className={styles.postallabel}>postal code
      <input type='text' className={styles.postalcode} />
      </label>
      </div>
      <div className={styles.descriptioncontainer}>
      <label htmlFor="description" className={styles.descriptionlabel}>description
      <textarea className={styles.description}></textarea>
      </label>
      </div>
      <div className={styles.contactcontainer}>
      <label for="contactinfo" className={styles.contactlabel}>contact info
      <label for="contactinfo" className={styles.emaillabel}>email
      <input type ='text' className={styles.contactinfo} placeholder='Your email address'/>
      </label>
      </label>
      </div>
      <div className={styles.checkboxcontainer}>
      <input type="checkbox" className="checkbox"/>
      <label for="checkbox">ok for others to contact you about other services, products or commercial interests</label>
      </div>
      </form>
      <button>Continue</button>
    </div>
  )
}