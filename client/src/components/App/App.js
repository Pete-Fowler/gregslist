import styles from './App.module.css';
import { useNavigate, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home.js';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import MyAccount from '../MyAccount/MyAccount';
import Post from '../Post/Post';
import { useState, useEffect } from 'react';

function App() {
  const [ user, setUser ] = useState(null);

  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`/me`)
  //   .then(res => res.json())
  //   .then(data => setUser(data));
  // }, [])

  function newUser(userData) {
    setUser(userData);
  }

  function logout() {
    setUser(null);
    fetch('/logout', {
      method: 'DELETE'
    })
    navigate('/login');
  }

  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login user={user} newUser={newUser}/>} />
        <Route path='/account' element={<MyAccount user={user} logout={logout}/>} />
        <Route path='/post' element={<Post user={user} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
