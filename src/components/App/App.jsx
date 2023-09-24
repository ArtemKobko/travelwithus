import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header';
import HomePage from '../../pages/HomePage';
import Destinations from '../../pages/Destinations';
import Pricing from '../../pages/Pricing';
import AboutUs from '../../pages/AboutUs';
import BookNow from '../../pages/Booking';
import Footer from '../Footer';
import DefaultRoute from '../../utils/defaultRoute';
import { ContextProvider } from '../../context';

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/booking" element={<BookNow />} />
          <Route path="/booking" element={<BookNow />} />
          <Route path="*" element={<DefaultRoute />} />
        </Routes>
      </ContextProvider>
      <Footer />
    </>

  );
}

export default App;
