import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Home  from './component/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
