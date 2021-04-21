import { screen, render } from '@testing-library/react';
import Projects from './Projects';

describe('<Projects />', () => {
  it('should render without crashing', async () => {
    render(<Projects />);

    expect(await (await screen.findByTestId('projects-row')).childElementCount).toBe(12);
  });
});
