import { render, screen } from '@testing-library/react';
import App from './App';

test('shows group number and team members', () => {
  render(<App />);
  
  // check group number is displayed
  expect(screen.getByText('Group 1')).toBeInTheDocument();
  
  // check all team members are displayed
  expect(screen.getByText('Wisal Ali')).toBeInTheDocument();
  expect(screen.getByText('Chibuokem Chinwendu')).toBeInTheDocument();
  expect(screen.getByText('Tara Mohammedsaeed')).toBeInTheDocument();
  expect(screen.getByText('Rebecca Rottler')).toBeInTheDocument();
});