import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './CSS/style.scss';
import HomeCloud from 'components/HomeCloud';
import Header from 'components/global/Header';
import Home from 'pages/home';
import AlphabetCloud from 'components/AlphabetCloud';
import Alphabets from 'pages/alphabets';
import Saptrangi_1 from 'pages/Saptrangi/Saptrangi-1';
import Saptrangi_2 from 'pages/Saptrangi/Saptrangi-2';
import SaptrangiListing from 'pages/SaptrangiListing';
import Footer from 'components/global/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomeCloud/>} />
          <Route exact path='/alphabets' element={<AlphabetCloud/>} />
        </Routes>   
        {/* <HomeCloud img="cloud-1.png"/> */}
        <Header/>
         <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/alphabets' element={<Alphabets/>} />          
          <Route exact path='/spatrangi' element={<SaptrangiListing/>} />
          <Route exact path='/spatrangi/spatrangi-1' element={<Saptrangi_1/>} />
          <Route exact path='/spatrangi/spatrangi-2' element={<Saptrangi_2/>} />
        </Routes>     
        <Footer/>
      </Router>      
    </>
  );
}

export default App;
