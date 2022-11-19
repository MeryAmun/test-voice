import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders Enjoy Freedom text', () => {
    render(<App />);
    expect(screen.getByText('Enjoy Freedom')).toBeInTheDocument();
  });
});
