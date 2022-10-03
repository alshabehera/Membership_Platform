import './App.css';
import Navbar from './components/Navbar/Navbar'
import Blockcomp from './components/BlockComp/Blockcomp';
import Cards from './components/Cards/Cards';
import CardsNFT from './components/CardsNFT/CardsNFT';
import Footer from './components/Footer/Footer'
import React from 'react';

function Homepage() {
  return (
    <div className="App">
      <Navbar/>
      <div className="containComps">
      <Blockcomp/>
      </div>
      <span className="v133_304">How The Runway Helps You</span>
      <div id="container"></div>
      <div id="container"><Cards/>
      <CardsNFT/>
      </div>
      <Footer/>
      <a className="copyRight" href="#">@2022 by The Runway Inc.</a>
      
      

    </div>
  );
}
 
export default Homepage;
