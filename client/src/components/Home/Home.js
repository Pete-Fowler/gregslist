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
  const accountLinkPath = user ? '/account' : '/login';
  const postPath = user ? '/posts-create' : '/login';

  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("/cities")
    .then(res => res.json())
    .then(data => {
      setCities(data)
    });
  }, [])

  const communityCategories = ["activities", "artists", "childcare", "classes", "events", "general", "groups", "local news", "lost&found", "missed connections", "musicians", "pets", "politics",
  "rants & raves", "rideshare", "volunteers"];

  const serviceCategories = ["automotive", "beauty", "cell&mobile", "computer", "creative", "bicycle", "farm&garden", "financial", "health&well", "household", "labor&move", "legal", "lessons",
  "marine", "pet", "real estate", "skilled trade", "sm biz ads", "travel&vac", "write&ed&tran"];


  const housingCategories = ["apts & housing", "housing swap", "housing wanted", "office & commercial", "parking & storage", "real estate for sale", "rooms & shared", "rooms wanted",
  "sublets & temporary", "vacation rentals"];

  const forSaleCategories = ["antiques", "appliances", "arts&crafts", "atv&utv&sno", "auto parts", "aviation", "baby&kid", "barter", "beauty&hlth", "bike parts",
  "bikes", "boat parts", "boats", "books", "business", "cars&trucks", "cds&dvd&vhs", "cell phones", "clothes&acc", "collectibles", "computer parts", "computers", "electronics", "farm&garden",
  "free", "furniture", "garage sale", "general", "heavy equip", "household", "jewelry", "materials", "motorcycle parts", "motorcycles", "music instr", "photo&video", "rvs&camp", "sporting",
  "tickets", "tools", "toys&games", "trailers", "video gaming", "wanted", "wheels&tires"];

  const jobsCategories = ["accounting&finance", "admin & office", "arch & engineering", "art & media & design", "biotech & science", "business & mgmt", "customer service", "education",
  "etc & misc", "food & bev & hosp", "general labor", "government", "human resources", "legal & paralegal", "manufacturing", "marketing & pr & ad", "medical & health",
  "nonprofit sector", "real estate", "retail & wholesale", "sales & biz dev", "salon & spa & fitness", "security", "skilled trade & craft", "software & qa & dba",
  "systems & network", "technical support", "transport", "tv & film & video", "web & info design", "writing & editing"]

  return (
    <div className={styles.home}>
      {/* ================LEFT BAR============ */}
      <div className={styles.leftBar}>
        <Link className={styles.siteTitle}>gregslist</Link>
        <br></br>
        <Link to={postPath} className={styles.posting}>create a posting</Link>
        <Link to={accountLinkPath}>my account</Link> 
        <br></br>
        <form onSubmit={handleSearch}><input className={styles.search} type='text' placeholder='search gregslist' value={searchTerm} onChange={handleChange}></input></form>
        <br></br>
        <h4 className={styles.eventcal}><a href="#">event calendar</a></h4>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.tableRowDays}>
              <th className={styles.tableHead}>M</th>
              <th className={styles.tableHead}>T</th>
              <th className={styles.tableHead}>W</th>
              <th className={styles.tableHead}>T</th>
              <th className={styles.tableHead}>F</th>
              <th className={styles.tableHead}>S</th>
              <th className={styles.tableHead}>S</th>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}>24</td>
              <td className={styles.tableDate}>25</td>
              <td className={styles.tableDate}>26</td>
              <td className={styles.tableDate}>27</td>
              <td className={styles.tableDateCurrent}><a href="">28</a></td>
              <td className={styles.tableDate}><a href="">29</a></td>
              <td className={styles.tableDate}><a href="">30</a></td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}><a href="">31</a></td>
              <td className={styles.tableDate}><a href="">1</a></td>
              <td className={styles.tableDate}><a href="">2</a></td>
              <td className={styles.tableDate}><a href="">3</a></td>
              <td className={styles.tableDate}><a href="">4</a></td>
              <td className={styles.tableDate}><a href="">5</a></td>
              <td className={styles.tableDate}><a href="">6</a></td>
              
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}><a href="">7</a></td>
              <td className={styles.tableDate}><a href="">8</a></td>
              <td className={styles.tableDate}><a href="">9</a></td>
              <td className={styles.tableDate}><a href="">10</a></td>
              <td className={styles.tableDate}><a href="">11</a></td>
              <td className={styles.tableDate}><a href="">12</a></td>
              <td className={styles.tableDate}><a href="">13</a></td>
            </tr>
            <tr className={styles.tableRow}>
              <td className={styles.tableDate}><a href="">14</a></td>
              <td className={styles.tableDate}><a href="">15</a></td>
              <td className={styles.tableDate}><a href="">16</a></td>
              <td className={styles.tableDate}><a href="">17</a></td>
              <td className={styles.tableDate}><a href="">18</a></td>
              <td className={styles.tableDate}><a href="">19</a></td>
              <td className={styles.tableDate}><a href="">20</a></td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <Link className={styles.links}>gregslist app</Link>
        <Link className={styles.links}>help, faq, abuse, legal</Link>
        <Link className={styles.links}>avoid scams & fraud</Link>
        <Link className={styles.links}>personal safety tips</Link>
        <Link className={styles.links}>terms of use</Link>
        <Link className={styles.links}>privacy policy</Link>
        <Link className={styles.links}>system status</Link>
        <br></br>
        <Link className={styles.links}>about gregslist</Link>
        <Link className={styles.links}>gregslist is hiring</Link>
        <Link className={styles.links}>gregslist open source</Link>
        <Link className={styles.links}>gregslist blog</Link>
        <Link className={styles.links}>best-of-gregslist</Link>
        <Link className={styles.links}>"gregslist joe"</Link>
        <Link className={styles.links}>gregslist philanthropies</Link>
      </div>
      {/* ==========MAIN / CENTER============= */}
      <div className={styles.main}>
        <div className={styles.header}>
          <Link>denver, CO</Link>
        </div>
        <div className={styles.mainContentBox}>
          <div className={styles.col1}>
            <div className={`${styles.section} ${styles.community}`} >
              <Link className={styles.heading} to='/search/community'>community</Link>
              {renderLinks(communityCategories)}
            </div>
            <div className={`${styles.section} ${styles.services}`}>
              <Link className={styles.heading} to='/search/services'>services</Link>
              {renderLinks(serviceCategories)}
            </div>
          </div>
          <div className={styles.col2}>
            <div className={`${styles.section} ${styles.housing}`}>
              <Link className={styles.heading} to='/search/housing'>housing</Link>
              {renderLinks(housingCategories, styles.housingLinks)}
            </div>
            <div className={`${styles.section} ${styles.forSale}`}>
              <Link className={styles.heading} to='/search/for sale'>for sale</Link>
              {renderLinks(forSaleCategories)}
            </div>
          </div>
          <div className={styles.col3}>
            <div className={`${styles.section} ${styles.jobs}`}>
              <Link className={styles.heading} to='/search/jobs'>jobs</Link>
              {renderLinks(jobsCategories, styles.jobsLinks)}
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
  
  function renderLinks(categories, classParam=styles.subcategory) {
    return <div className={styles.subcategoryBox}>
    {categories.map(category => <Link key={category} className={`${styles.subcategory} ${classParam}`} to={`/search/${category}`}>{category}</Link>)}
  </div>
  }

