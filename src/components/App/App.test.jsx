import React from 'react';
import {
  describe, it, expect,
} from 'vitest';
import { screen } from '@testing-library/react';
import renderWithRouter from '../../utils/renderWithRouter';
import App from './App';

describe('App component', () => {
  it('renders the Header component', () => {
    renderWithRouter(<App />);
    const headerNav = screen.getByRole('navigation');
    expect(headerNav).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    renderWithRouter(<App />);
    const footerHeader = screen.getByRole('heading', { name: /join our newsletter to receive exclusive travel rewards/i });
    expect(footerHeader).toBeInTheDocument();
  });

  it('renders the HomePage component for the "/" route', () => {
    renderWithRouter(<App />, '/');
    const homePageHeader = screen.getByRole('heading', { name: /most visited/i });
    expect(homePageHeader).toBeInTheDocument();
  });

  it('redirect to HomePage component when route is unknown', () => {
    renderWithRouter(<App />, '/unknown-route');
    const homePageHeader = screen.getByRole('heading', { name: /most visited/i });
    expect(homePageHeader).toBeInTheDocument();
  });
  it('renders the Destinations component for the "/destinations" route', () => {
    renderWithRouter(<App />, '/destinations');
    const destinationsElement = screen.getByRole('heading', { name: /all destinations/i });
    expect(destinationsElement).toBeInTheDocument();
  });

  it('renders the Pricing component for the "/pricing" route', () => {
    renderWithRouter(<App />, '/pricing');

    const pricingHeader = screen.getByRole('heading', { name: /explore world with us/i });
    expect(pricingHeader).toBeInTheDocument();
  });

  it('renders the AboutUs component for the "/about-us" route', () => {
    renderWithRouter(<App />, '/about-us');

    const aboutUsHeader = screen.getByRole('heading', { name: /our team/i });
    expect(aboutUsHeader).toBeInTheDocument();
  });

  it('renders the BookNow component for the "/booking" route', () => {
    renderWithRouter(<App />, '/booking');
    const bookNowHeader = screen.getByRole('heading', { name: /just travel with us/i });
    expect(bookNowHeader).toBeInTheDocument();
  });
});
