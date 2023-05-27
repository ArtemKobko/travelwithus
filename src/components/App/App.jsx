import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Pricing from '../../pages/Pricing';
import BookNow from '../../pages/BookNow';
import HomePage from '../../pages/HomePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-tours" element={<Pricing />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/book-now" element={<Pricing />} />
        <Route path="/about-us" element={<BookNow />} />
      </Routes>
    </Router>
  );
}

export default App;
