import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import ItemDotsMenu from '../components/table/components/dots-menu';
import editIcon from '../images/Icons-edit-05.svg';
import deleteIcon from '../images/Icons-trash-01.svg';
import { BrowserRouter } from 'react-router-dom';

describe('ItemRow', () => {
  const options = [
    { caption: 'Editar', href: 'https://www.google.com/', icon: editIcon },
    { caption: 'Eliminar', href: 'https://www.google.com/', icon: deleteIcon },
  ];

  beforeEach(() => {
    cleanup();
    render(
      <BrowserRouter>
        <ItemDotsMenu options={options} />
      </BrowserRouter>,
    );
  });

  test('Check that the Options list are not showing off if the menu is not open', async () => {
    const AnchorOptions = screen.queryByRole('link');
    const ImgIcons = screen.queryAllByRole('img');

    expect(AnchorOptions).toBe(null);
    expect(ImgIcons).toHaveLength(1);
  });

  test('Check that Option list are showing off after the click happend', async () => {
    const Button = await screen.findByRole('button');
    fireEvent.click(Button);

    const AnchorOptions = screen.queryAllByRole('link');
    const ImgIcons = screen.queryAllByRole('img');

    expect(AnchorOptions).toHaveLength(2);
    expect(ImgIcons).toHaveLength(3);

    expect(AnchorOptions[0]).toHaveTextContent(options[0].caption);
    expect(AnchorOptions[0]).toHaveProperty('href', options[0].href);
  });
});
