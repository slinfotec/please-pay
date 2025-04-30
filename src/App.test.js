import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Mobile Home Software System heading', () => {
  render(<App />);
  const heading = screen.getByText(/Mobile Home Software System/i);
  expect(heading).toBeInTheDocument();
});

test('renders payment instruction', () => {
  render(<App />);
  const instruction = screen.getByText(/Please Pay Hosting Payment To access Your Data/i);
  expect(instruction).toBeInTheDocument();
});

test('renders support assistance text', () => {
  render(<App />);
  const supportText = screen.getByText(/Please contact support for further assistance./i);
  expect(supportText).toBeInTheDocument();
});

test('renders support phone number', () => {
  render(<App />);
  const phone = screen.getByText(/0777 280 565/i);
  expect(phone).toBeInTheDocument();
});
