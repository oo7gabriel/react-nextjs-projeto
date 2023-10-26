import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

test('renders the Counter component', () => {
  render(<Counter />);

  const counterElement = screen.getByTestId('count');
  expect(counterElement).toBeInTheDocument();
  expect(counterElement).toHaveTextContent('0');

  const incrementButton = screen.getByTestId('increment');
  const decrementButton = screen.getByTestId('decrement');
  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();

  fireEvent.click(incrementButton);
  expect(counterElement).toHaveTextContent('1');

  fireEvent.click(decrementButton);
  expect(counterElement).toHaveTextContent('0');
});
