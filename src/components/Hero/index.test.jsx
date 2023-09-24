import React from 'react';
import { screen } from '@testing-library/react';
import {
  describe, it, expect, vi, beforeEach,
} from 'vitest';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../../utils/renderWithRouter';
import Hero from '.';

const user = userEvent.setup();

const mockContext = {
  setButtonPush: vi.fn(),
};

vi.mock('react', async () => ({
  ...await vi.importActual('react'),

  useContext: () => mockContext,
}));

describe('hero testing', () => {
  beforeEach(() => {
    renderWithRouter(<Hero />);
  });
  it('should render component without errors', () => {
    expect(screen.getByTestId('video-background')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /just travel with us/i })).toBeInTheDocument();
    expect(screen.getByTestId('contry-selector')).toBeInTheDocument();
    expect(screen.getByTestId('slider')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /find your journey/i })).toBeInTheDocument();
  });
  it('should play video correctly', () => {
    const video = screen.getByTestId('video-background');
    expect(video.autoplay).toBe(true);
    expect(video.playsInline).toBe(true);
    expect(video.loop).toBe(true);
    expect(video.muted).toBe(true);
  });
  it('should set state to true when "Find your journey" button is clicked', async () => {
    const { setButtonPush } = mockContext;
    const bookingButton = screen.getByRole('button', { name: /find your journey/i });
    await user.click(bookingButton);
    expect(setButtonPush).toHaveBeenCalledWith(true);
  });
});
