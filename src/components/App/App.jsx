import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import HomePage from '../../pages/HomePage';
import Destinations from '../../pages/Destinations';
import Pricing from '../../pages/Pricing';
import AboutUs from '../../pages/AboutUs';
import BookNow from '../../pages/BookNow';
import Footer from '../Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/book-now" element={<BookNow />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
