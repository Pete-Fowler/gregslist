import styles from './Post.module.css';
import { useState } from 'react';

export default function Post() {


  return (
    <div>
      <header className={styles.header}>
        <a>CL</a>
        <nav className="breadcrumbcontainer">
          <ul className="breadcrumbs"></ul>
        </nav>
        <div className={styles.logincontainer}>
          <p className="login"> [ <a href="">log in </a> ] </p>
          <p className="createaccount"> [ <a href="">create account </a> ] </p>
        </div>    
      </header>
      <label for="postingtitle" className={styles.postlabel}>posting title
      <input type='text' className={styles.postingtitle} />
      </label>
      <label for="price" className={styles.pricelabel}>price</label>
      <input type="number" className={styles.price} class="json-form-input" name="price" title="Please enter a number" tabindex="1" maxlength="11"></input>
      <label for="cityorneighborhood" className={styles.citylabel}>city or neighborhood
      <input type='text' className={styles.city} />
      </label>
      <label for="postalcode" className={styles.postallabel}>postal code
      <input type='text' className={styles.postalcode} />
      </label>
      <label for="description" className={styles.descriptionlabel}>description
      <textarea className={styles.description}></textarea>
      </label>
      <div className="contact">
      <label for="contactinfo" className={styles.contactlabel}>contact info
      <label for="contactinfo" className={styles.emaillabel}>email
      <input type ='text' className={styles.contactinfo} placeholder='Your email address'/>
      </label>
      </label>
      </div>
      <div className="checkbox">
      <input type="checkbox" className="checkbox"/>
      <label for="checkbox">ok for others to contact you about other services, products or commercial interests</label>
      </div>
    </div>
  )
}