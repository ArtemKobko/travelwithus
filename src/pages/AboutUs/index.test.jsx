import React from 'react';
import {
  describe, it, expect, beforeEach, vi,
} from 'vitest';
import { screen } from '@testing-library/react';
import renderWithRouter from '../../utils/renderWithRouter';
import AboutUs from '.';
import offersData from '../../utils/offersData';

describe('about us page testing', () => {
  beforeEach(() => {
    renderWithRouter(<AboutUs />);
  });

  it('should render page without errors', () => {
    const heroHeader = screen.getByRole('heading', { name: /our team/i });
    const articleHeader = screen.getByRole('heading', { name: /who we are/i });
    const offersHeader = screen.getByRole('heading', { name: /what we offer/i });
    expect(heroHeader).toBeInTheDocument();
    expect(articleHeader).toBeInTheDocument();
    expect(offersHeader).toBeInTheDocument();
  });

  it('should render all offers items', () => {
    const offers = screen.getByTestId('our-offers');
    expect(offers.children.length).toBe(4);

    it('should component render with empty offersData', () => {
      vi.spyOn(offersData, 'default').mockReturnValue([]);
      renderWithRouter(<AboutUs />);
      const offersSection = screen.queryByTestId('our-offers');
      const heroHeader = screen.getByRole('heading', { name: /our team/i });
      expect(offersSection).not.toBeInTheDocument();
      expect(heroHeader).toBeInTheDocument();
    });
  });
});
