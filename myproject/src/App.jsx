
import React from 'react'; 

import NavBar from './components/funcomp/NavBar';
import './App.css'; 
import About from './components/funcomp/About'
import Contact from './components/funcomp/Contact'
import Gallery from './components/funcomp/Gallery'
import Home from './components/funcomp/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/funcomp/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element= {<About college = "Kongu Engineering" clg1 = "Kongu Arts" clg2 = "Naturopathy"/>} />
          <Route path="/gallery" element = {<Gallery />} />
          <Route path="/contact" element = {<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;