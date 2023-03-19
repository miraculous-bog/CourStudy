import React from 'react';
import styles from './App.module.css';
import Courses from './components/Courses'
import PageStudy from './components/PageStudy';
import logo from './img/logo.jpg';
import Header from './components/Header';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.logoblock}>
          <div className={styles.logo}>
            <Link to={`/`}>
              <img className={styles.logoimg} src={logo} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <Header />
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/course/:id" element={<PageStudy />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
