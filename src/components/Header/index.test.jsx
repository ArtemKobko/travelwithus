import React from 'react';
import {
  describe, it, expect,
} from 'vitest';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../../utils/renderWithRouter';
import App from '../App/App';
import Header from '.';

const user = userEvent.setup();

describe('header testing', () => {
  it('render Header without crashing', () => {
    renderWithRouter(<Header />);
    const link = screen.getByRole('link', {
      name: /travel with us/i,
    });
    const logo = within(link).getByText(/travel with us/i);
    expect(logo).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /destinations/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /pricing/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about us/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /booking/i })).toBeInTheDocument();
  });

  it('navigation menu works when press the toggle button', async () => {
    renderWithRouter(<Header />);
    const openButton = screen.getByTestId('open');
    userEvent.click(openButton);
    const closeButton = await screen.findByTestId('close');
    expect(openButton).not.toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
    userEvent.click(closeButton);
    expect(await screen.findByTestId('open')).toBeInTheDocument();
    expect(closeButton).not.toBeInTheDocument();
  });

  it('redirect to homepage when clicking on the logo', async () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', {
      name: /travel with us/i,
    });
    const logo = within(link).getByText(/travel with us/i);
    await user.click(logo);
    const homePageText = screen.getByRole('link', { name: /view more/i });
    expect(homePageText).toBeInTheDocument();
  });
});
