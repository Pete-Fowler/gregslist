import styles from './Home.module.css';
import { useEffect, useState } from 'react'
import Cities from '../Cities/Cities';
import { Link, useNavigate } from 'react-router-dom';

export default function Home({ user }) {
  
  const [ searchTerm, setSearchTerm ] = useState('');
  
  const navigate = useNavigate();

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
  }

  // Render MyAccount or Login based on whether user is logged in
  const path = user ? '/account' : '/login';

  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("/cities")
    .then(res => res.json())
    .then(data => {
      setCities(data)
    });
  }, [])

  return (
    <div className={styles.home}>
      {/* ================LEFT BAR============ */}
      <div className={styles.leftBar}>
        <Link className={styles.siteTitle}>gregslist</Link>
        <br></br>
        <Link to='/posts-create' className={styles.posting}>create a posting</Link>
        <Link to={path}>my account</Link> 
        <br></br>
        <form onSubmit={handleSearch}><input className={styles.search} type='text' placeholder='search gregslist' value={searchTerm} onChange={handleChange}></input></form>
      </div>
      {/* ==========MAIN / CENTER============= */}
      <div className={styles.main}>
        <div className={styles.header}>
          <Link>denver, CO</Link>
        </div>
        <div className={styles.mainContentBox}>
          <div className={styles.col1}>
            <div className={`${styles.section} ${styles.community}`}>
              <Link className={styles.heading} to='/search/community'>community</Link>
              {communityContent()}
            </div>
            <div className={`${styles.section} ${styles.services}`}>
              <Link className={styles.heading} to='/search/services'>services</Link>
              {servicesContent()}
            </div>
          </div>
          <div className={styles.col2}>
            <div className={`${styles.section} ${styles.housing}`}>
              <Link className={styles.heading} to='/search/housing'>housing</Link>
            </div>
            <div className={`${styles.section} ${styles.forSale}`}>
              <Link className={styles.heading} to='/search/for sale'>for sale</Link>
            </div>
          </div>
          <div className={styles.col3}>
            <div className={`${styles.section} ${styles.jobs}`}>
              <Link className={styles.heading} to='/search/jobs'>jobs</Link>
            </div>
          </div>
        </div>
      </div>
      {/* ============RIGHT BAR================ */}
      <div className={styles.rightBar}>
      <br></br>
      <div className={styles.langcontainer}>
      <select>
        <option value="?lang=da&amp;setlang=1">english</option>
        <option value="?lang=da&amp;setlang=1">dansk</option>
        <option value="?lang=de&amp;setlang=1">deutsch</option>
        <option value="?lang=es&amp;cc=mx&amp;setlang=1">español</option>
        <option value="?lang=fr&amp;setlang=1">français</option>
        <option value="?lang=it&amp;setlang=1">italiano</option>
        <option value="?lang=pt&amp;setlang=1">português</option>
        <option value="?lang=fi&amp;setlang=1">suomi</option>
        <option value="?lang=sv&amp;setlang=1">svenska</option>
        <option value="?lang=vi&amp;setlang=1">tiếng việt</option>
        <option value="?lang=tr&amp;setlang=1">türkçe</option>
        <option value="?lang=ru&amp;setlang=1">русский</option>
        <option value="?lang=zh&amp;setlang=1">中文</option>
        <option value="?lang=ja&amp;setlang=1">日本語</option>
        <option value="?lang=ko&amp;setlang=1">한국말</option>
      </select>
      </div>
      <h5 className={styles.h5}>nearby cl</h5>
      {cities.map(city => <Cities
      key={city.id}
      id={city.id}
      name={city.name}
    />)}
      <h5 className={styles.h5}>us cities</h5>
      <h5 className={styles.h5}>us states</h5>
      <h5 className={styles.h5}>canada</h5>
      <h5 className={styles.h5}>cl worldwide</h5>
      </div>
    </div>
  )
}

function communityContent() {
  const cats = ['activities', 'artists', 'childcare', 'classes', 'events', 'general', 'groups', 'local news', 'lost+found', 'missed connections', 'musicians', 'pets', 'politics', 'rants & raves', 'rideshare', 'volunteers']
  return <div className={styles.subcategoryBox}>
    {cats.map(cat => <Link className={styles.subcategory} to={`/search/${cat}`}>{cat}</Link>)}
  </div>
}

function servicesContent() {
  const cats = ['automotive', 'beauty', 'cell/mobile', 'computer', 'creative', 'cycle', 'event', 'farm+garden', 'financial', 'health/well', 'household', 'labor/move', 'legal', 'lessons', 'marine', 'pet', 'real estate', 'skilled trade', 'sm biz ads', 'travel/vac']
  return <div className={styles.subcategoryBox}>
    {cats.map(cat => <Link className={styles.subcategory} to={`/search/${cat}`}>{cat}</Link>)}
  </div>
}

function content() {
  const cats = ['apts / housing', 'housing swap', 'housing wanted', 'office / commercial', 'parking / storage', 'real estate for sale', 'rooms / shared', 'rooms wanted', 'sublets / temporary', 'vacation rentals']
  return <div className={styles.subcategoryBox}>
    {cats.map(cat => <Link className={styles.subcategory} to={`/search/${cat}`}>{cat}</Link>)}
  </div>
}
