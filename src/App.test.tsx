import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should find hello text', async () => {
    render(<App />);
    const linkElement = await screen.findByText(/hello/i);
    expect(linkElement).toBeInTheDocument();
  });
});
