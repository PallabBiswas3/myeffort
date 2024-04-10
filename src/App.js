import React from 'react';
import Navbar from './navbar';
import './App.css';
import Home from './home';
import OurCollection from './ourCollection';
import BestSelling from './bestSelling';
import Review from './review';
import Contact from './contact';
import Footer from './footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <OurCollection />
      <BestSelling />
      <Review />
      <Contact />
      <Footer />
      <button onClick={scrollToTop} id="btnTop">Back to Top</button>
    </div>
  );
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default App;
