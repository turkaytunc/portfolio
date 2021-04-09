import { screen, render, fireEvent } from '@testing-library/react';
import HamburgerButton from './HamburgerButton';

describe('<HamburgerButton />', () => {
  it('should render without crashing', async () => {
    let showSidebar = false;

    const setShowSidebar = (prev: boolean) => !prev;

    render(
      <HamburgerButton
        setShowSidebar={() => {
          showSidebar = setShowSidebar(showSidebar);
        }}
      />
    );

    fireEvent.click(await screen.findByRole('button'));

    expect(showSidebar).toBe(true);
  });
});
