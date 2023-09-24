import React from 'react';
import {
  beforeEach, describe, expect, it,
} from 'vitest';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../../utils/renderWithRouter';
import Footer from '.';

const user = userEvent.setup();

describe('footer testing', () => {
  beforeEach(() => {
    renderWithRouter(<Footer />);
  });
  it('render without errors', () => {
    const text = screen.getByRole('heading', {
      name: /join our newsletter to receive exclusive travel rewards/i,
    });
    const subButton = screen.getByRole('button', {
      name: /subscribe/i,
    });
    expect(text).toBeInTheDocument();
    expect(subButton).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
    expect(screen.getByText(/travel with us © 2023/i)).toBeInTheDocument();
  });

  it('to submit an email address', async () => {
    const input = screen.getByPlaceholderText('Your Email');
    const subButton = screen.getByRole('button', {
      name: /subscribe/i,
    });
    await user.type(input, 'test@example.com');
    await user.click(subButton);
    expect(input).toHaveValue('');
    expect(await screen.findByText(/You has been successfully subscribed to the newsletter/i)).toBeInTheDocument();
  });

  it('display the current year', () => {
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(`Travel with us © ${currentYear}`)).toBeInTheDocument();
  });

  it('should display the social media icons', () => {
    const contentinfo = screen.getByRole('contentinfo');
    const socialsContainer = within(contentinfo).getByRole('list');
    expect(socialsContainer).toBeInTheDocument();
    expect(socialsContainer.children.length).toBe(5);
  });
});
