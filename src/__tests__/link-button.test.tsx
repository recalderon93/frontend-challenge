import { render, cleanup, screen } from '@testing-library/react';
import LinkButton from '../components/button/link-button';
import { BrowserRouter } from 'react-router-dom';

describe('@components/LinkButton', () => {
  const href = 'https://www.google.com';
  const title = 'testButton';
  beforeEach(() => {
    cleanup();
    render(
      <BrowserRouter>
        <LinkButton variant='primary' to={href} title={title} />
      </BrowserRouter>,
    );
  });

  test('Expect the button to have title text context', () => {
    const button = screen.getByRole('link');
    expect(button).toHaveTextContent(title);
  });
});
