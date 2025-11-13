import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EV FIREPRO SUPPRESSION button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/EV FIREPRO SUPPRESSION/i);
  expect(buttonElement).toBeInTheDocument();
});
