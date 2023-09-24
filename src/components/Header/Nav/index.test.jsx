import React from 'react';
import {
  describe, it, expect, beforeEach, vi,
} from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../../../utils/renderWithRouter';
import App from '../../App/App';

const user = userEvent.setup();
const mockedUsedNavigate = vi.fn();

vi.mock('react-router-dom', async () => ({

  ...await vi.importActual('react-router-dom'),

  useNavigate: () => mockedUsedNavigate,
}));

describe('header testing', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });
  it('redirect to rigth page when clicking on the link', async () => {
    const destinationsLink = screen.getByRole('link', {
      name: /destinations/i,
    });
    const pricingLink = screen.getByRole('link', {
      name: /pricing/i,
    });
    const aboutUsLink = screen.getByRole('link', {
      name: /about us/i,
    });

    await user.click(destinationsLink);
    const destinationsHeader = screen.findByRole('heading', {
      name: /all destinations/i,
    });
    expect(await destinationsHeader).toBeInTheDocument();

    await user.click(pricingLink);
    const pricingHeader = screen.findByRole('heading', {
      name: /explore world with us/i,
    });
    expect(await pricingHeader).toBeInTheDocument();

    await user.click(aboutUsLink);
    const aboutUsHeader = screen.findByRole('heading', {
      name: /our team/i,
    });
    expect(await aboutUsHeader).toBeInTheDocument();
  });

  it('redirect to booking page when clicking on the button', async () => {
    const button = screen.getByRole('button', { name: /booking/i });
    await user.click(button);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/booking');
  });
});
