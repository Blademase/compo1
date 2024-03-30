import React from 'react';
import './App.css';
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs';
import FirstHeader from './components/Header/FirstHeader';
import SecondHeader from './components/Header/SecondHeader';
import Body from "./components/Body/Body"
import FooterFirst from './components/Footer/FooterFirst';
import Test from './components/Test';
import FooterSecond from './components/Footer/FooterSecond';
import FooterThird from './components/Footer/FooterThird';
function App() {
  return (
    <div id="App">
      <FirstHeader/>

      <div id='HorizontalLine'></div> 
      <SecondHeader/>
      
      <div id='HorizontalLine'></div> 
      <BreadCrumbs/>
      <Body/>
      
      <div id='HorizontalLine'></div> 
      <FooterFirst/>
      
      <div id='HorizontalLine'></div> 
      <FooterSecond/>
      
      <div id='HorizontalLine'></div> 
      <FooterThird/>
      <Test/>
    </div>
   
  );
}

export default App;
