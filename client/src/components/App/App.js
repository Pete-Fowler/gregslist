import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home.js';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
