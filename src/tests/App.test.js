import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders app heading', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Seattle Startup Week/i);
  expect(headingElement).toBeInTheDocument();
});
