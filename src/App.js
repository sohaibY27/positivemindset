import React from "react";
import Header from "./components/header-footer/header";
import "./App.css";
import Nata from "./resources/pkrg.png";
import Features from "./components/carousel/index";
import Cover from './cover/index'
import Footer from './footer/footer';

function App() {


  return (


   
    <div className="container">
    
    <Header/>
      <div
        className="appmain"
     
      >
        <img src={Nata} alt="main" className="image-main"></img>
      
        <Cover/>
      </div>
      <Features/>
      <Footer/>
      
    </div>
 
  );
}

export default App;
