import React from 'react';
import {
  describe, it, expect, beforeEach,
} from 'vitest';
import { screen } from '@testing-library/react';
import renderWithRouter from '../../utils/renderWithRouter';
import Pricing from '.';

describe('pricing testing', () => {
  beforeEach(() => {
    renderWithRouter(<Pricing />);
  });

  it('should render component without errors', () => {
    expect(screen.getByTestId('video-background')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /explore world with us/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /price list/i })).toBeInTheDocument();
  });
  it('is download link has correct parameters', async () => {
    const downloadLink = screen.getByRole('link', { name: /price list/i });
    expect(downloadLink).toHaveAttribute('download', expect.stringMatching(/price list/i));
    expect(downloadLink).toHaveAttribute('href', expect.stringMatching(/\.pdf$/));
  });
});
