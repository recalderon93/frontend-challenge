/* eslint-disable camelcase */
import { screen, render, cleanup } from '@testing-library/react';
import SearchProducts from '../components/templates/search-products';
import { BrowserRouter } from 'react-router-dom';

describe('@templates/SearchProducts', () => {
  const data: DataItem[] = [
    {
      id: 'trj-crd1',
      name: 'Tarjeta de Credito',
      description: 'Description del producto',
      date_release: new Date(),
      date_revision: new Date(),
      logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    },
  ];
  const onChangeValue = jest.fn();
  const inputValue = 'Input Value';
  const fn = jest.fn();
  beforeEach(() => {
    cleanup();
    render(
      <BrowserRouter>
        <SearchProducts
          data={data}
          onChangeSearchValue={onChangeValue}
          searchValue={inputValue}
          onDeleteItem={fn}
        />
      </BrowserRouter>,
    );
  });

  test('Check Search Input', () => {
    const searchInput = screen.queryByRole('search');

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveProperty('placeholder', 'Buscar...');
    expect(searchInput).toHaveProperty('value', inputValue);
  });

  test('Check Add Button', () => {
    const AddBTN = screen.queryByText(/Agregar/i);

    expect(AddBTN).toBeInTheDocument();
  });

  test('Check Table', () => {
    const Table = screen.queryByRole('table');
    const headerCell = screen.queryAllByRole('columnheader');

    expect(Table).toBeInTheDocument();
    expect(headerCell).toHaveLength(6);
  });
});
