import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home.js';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import MyAccount from '../MyAccount/MyAccount';
import { useState, useEffect } from 'react';

function App() {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    fetch(`/me`)
    .then(res => res.json())
    .then(data => setUser(data));
  }, [])

  function newUser(userData) {
    setUser(userData);
  }

  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Home user={user}/>} />
        <Route path='/login' element={<Login user={user} newUser={newUser}/>} />
        <Route path='/account' element={<MyAccount user={user} newUser={newUser} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
