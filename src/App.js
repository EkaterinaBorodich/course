import './App.css';
import React from "react";
import Routing from "./components/Routing";
import { BrowserRouter } from "react-router-dom";
import Footer from './components/Footer';
// import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    
    <BrowserRouter>
    <Nav/>
    {/* <Header/> */}
    <Routing />
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
