import styles from './App.module.css';
import Home from '../Home/Home.js';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import MyAccount from '../MyAccount/MyAccount';
import CreatePost from '../CreatePost/CreatePost';
import Header from '../Header/Header';
import Search from '../Search/Search';
import SearchCategories from '../SearchCategories/SearchCategories';
import PostDetails from '../Post/PostDetails';
import EditPost from '../EditPost/EditPost';

import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [ user, setUser ] = useState(null);
  const [filterCategory, setFilterCategory] = useState("")
  const [filterSubCategory, setFilterSubCategory] = useState("")
  

  useEffect(() => {
    fetch(`/me`)
    .then(r => {
      if(r.ok) {
        r.json().then(userData => setUser(userData));
      }
    })
  }, [])

 

  function newUser(userData) {
    setUser(userData);
  }
  
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Home user={user} filterSubCategory={filterSubCategory} setFilterSubCategory={setFilterSubCategory} filterCategory={filterCategory} setFilterCategory={setFilterCategory}/>} />
        <Route path='account' element={<MyAccount user={user} newUser={newUser} />} />
        
        <Route element={<Header user={user}/>} > 
          <Route path='login' element={<Login user={user} newUser={newUser}/>} />
          <Route path='account' element={<MyAccount user={user} newUser={newUser} />} />
          <Route path='posts/:id' element={<PostDetails user={user} />} />
          <Route path='posts-create' element={<CreatePost user={user} />} />
          <Route path='posts-edit/:id' element={<EditPost user={user} />} />
          <Route path='search/:term' element={<Search user={user} />} />
          <Route path='search-categories/:term' element={<SearchCategories user={user} filterSubCategory={filterSubCategory} setFilterSubCategory={setFilterSubCategory} filterCategory={filterCategory} setFilterCategory={setFilterCategory}/>} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
