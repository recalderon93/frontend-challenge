/* eslint-disable camelcase */
import { screen, render, cleanup, within, fireEvent } from '@testing-library/react';
import ItemRow from '../components/table/components/item-row';
import { BrowserRouter } from 'react-router-dom';

describe('@components/ItemRow', () => {
  const data = {
    id: 'trj-crd1',
    name: 'Tarjeta de Credito',
    description: 'Description del producto',
    date_release: new Date(),
    date_revision: new Date(),
    logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
  };
  const onDeleteCallback = jest.fn();
  beforeEach(() => {
    cleanup();
    render(
      <BrowserRouter>
        <table>
          <tbody>
            <ItemRow data={data} onDeleteItem={onDeleteCallback} />
          </tbody>
        </table>
      </BrowserRouter>,
    );
  });

  test('Check how many Roles', async () => {
    const row = await screen.findAllByRole('row');
    const rowCells = await screen.findAllByRole('cell');

    expect(row).toHaveLength(1);
    expect(rowCells).toHaveLength(6);

    const img = await within(rowCells[0]).queryByRole('img');

    expect(img).toHaveProperty('src', data.logo);
    expect(rowCells[1]).toHaveTextContent(data.name);
    expect(rowCells[2]).toHaveTextContent(data.description);
  });

  test('Check onDelete Callback', () => {
    const dotsMenu = screen.getByRole('button');

    fireEvent.click(dotsMenu);

    const deleteButton = screen.getByText('Eliminar');

    fireEvent.click(deleteButton);
    expect(onDeleteCallback).toHaveBeenCalled();
  });
});
