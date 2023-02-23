import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const demoText = screen.getByText(/pricing/i);
  expect(demoText).toBeInTheDocument();
});
