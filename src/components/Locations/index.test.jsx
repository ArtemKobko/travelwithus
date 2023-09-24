import React from 'react';
import {
  describe, it, expect, vi,
} from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../../utils/renderWithRouter';
import Locations from '.';
import App from '../App/App';

const user = userEvent.setup();

const mockContext = {
  countryId: 1,
  desiredPrice: 700,
  buttonPush: true,
  setCountryId: vi.fn(),
  setDesiredPrice: vi.fn(),
  setButtonPush: vi.fn(),
};
const mockedUsedNavigate = vi.fn();

vi.mock('react', async () => ({
  ...await vi.importActual('react'),
  useContext: () => mockContext,
}));

vi.mock('react-router-dom', async () => ({
  ...await vi.importActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('location testing on home page', () => {
  it('should render Locations component on home page correct', () => {
    renderWithRouter(<Locations destinationsPage={false} />);
    const header = screen.getByRole('heading', { name: /most visited/i });
    const viewMoreButton = screen.getByRole('link', { name: /view more/i });
    const locationData = screen.getByTestId('locations-data');
    expect(locationData.children.length).toBe(6);
    expect(header).toBeInTheDocument();
    expect(viewMoreButton).toBeInTheDocument();
  });

  it('should navigate to destinations page when "view more" button is clicked', async () => {
    renderWithRouter(<App />);
    const viewMoreButton = screen.getByRole('link', { name: /view more/i });
    user.click(viewMoreButton);
    const header = screen.findByRole('heading', { name: /all destinations/i });
    expect(await header).toBeInTheDocument();
  });
  it('should render Locations component on destinations page correct', () => {
    renderWithRouter(<Locations destinationsPage />);
    const header = screen.getByRole('heading', { name: /all destinations/i });
    const viewMoreButton = screen.queryByRole('link', { name: /view more/i });
    const locationData = screen.getByTestId('locations-data');
    expect(locationData.children.length).toBe(9);
    expect(header).toBeInTheDocument();
    expect(viewMoreButton).not.toBeInTheDocument();
  });
  it('should navigate to booking with correct context when "book now" button is clicked', async () => {
    renderWithRouter(<App />);
    const viewMoreButton = screen.getByRole('link', { name: /view more/i });
    user.click(viewMoreButton);
    const bookNowButton = await screen.findAllByRole('button', { name: /book now/i });
    await user.click(bookNowButton[0]);
    expect(mockContext.setCountryId).toHaveBeenCalledWith(mockContext.countryId);
    expect(mockContext.setDesiredPrice).toHaveBeenCalledWith(mockContext.desiredPrice);
    expect(mockContext.setButtonPush).toHaveBeenCalledWith(true);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/booking');
  });
});
