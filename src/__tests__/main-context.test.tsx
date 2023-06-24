import { render, cleanup, screen } from '@testing-library/react';
import MainContext from '../context/main-context';

describe('@context/MainContext', () => {
  beforeEach(() => {
    cleanup();
    render(
      <MainContext>
        <div>Test</div>
      </MainContext>,
    );
  });

  test('Check if MainContext is rendered', () => {
    const div = screen.getByText('Test');
    expect(div).toBeInTheDocument();
  });
});
