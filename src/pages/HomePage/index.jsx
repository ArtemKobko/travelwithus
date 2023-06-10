import React from 'react';
import Hero from '../../components/Hero';
import Locations from '../../components/Locations';

function HomePage() {
  return (
    <>
      <Hero />
      <Locations destinationsPage={false} />
    </>

  );
}

export default HomePage;
