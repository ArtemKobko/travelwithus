import React from 'react';
import {
  describe, it, expect, beforeEach, vi,
} from 'vitest';
import { screen } from '@testing-library/react';
import renderWithRouter from '../../utils/renderWithRouter';
import BookNow from '.';

const mockContext = {
  countryId: 1,
  desiredPrice: 700,
  buttonPush: true,
};
vi.mock('react', async () => ({
  ...await vi.importActual('react'),
  useContext: () => mockContext,
}));

describe('booking page testing with buttonPush true', () => {
  beforeEach(() => {
    renderWithRouter(<BookNow />);
  });
  it('should render Book Now component when buttonPush is false', () => {
    const hotels = screen.getAllByTestId('hotel');
    const heroHeader = screen.queryByRole('heading', { name: /just travel with us/i });
    expect(hotels.length).toBeGreaterThan(0);
    expect(heroHeader).not.toBeInTheDocument();
  });

  it('should  display message with country price if fitToPrice is true', () => {
    const priceMess = screen.getByText(/for this destination prices starts from 700\$ per person/i);
    expect(priceMess).toBeInTheDocument();
  });
});

describe('booking page testing with changed contex items', () => {
  it('should render Hero component when buttonPush is false', () => {
    mockContext.buttonPush = false;
    renderWithRouter(<BookNow />);
    const heroHeader = screen.getByRole('heading', { name: /just travel with us/i });
    expect(heroHeader).toBeInTheDocument();
  });
  it('should not display message with country price if fitToPrice is false', () => {
    mockContext.desiredPrice = 1000;
    renderWithRouter(<BookNow />);
    const priceMess = screen.queryByText(/for this destination prices starts from 700\$ per person/i);
    expect(priceMess).not.toBeInTheDocument();
  });
});
