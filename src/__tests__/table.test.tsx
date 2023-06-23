/* eslint-disable camelcase */
import { cleanup, render, screen } from '@testing-library/react';
import Table from '../components/table/table';

describe('@components/Table', () => {
  const data: DataItem[] = [
    {
      id: 'trj-crd1',
      name: 'Tarjeta de Credito',
      description: 'Description del producto',
      date_release: new Date(),
      date_revision: new Date(),
      logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    },
    {
      id: 'trj-crd2',
      name: 'Tarjeta de Credito',
      description: 'Description del producto',
      date_release: new Date(),
      date_revision: new Date(),
      logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    },
    {
      id: 'trj-crd3',
      name: 'Tarjeta de Credito',
      description: 'Description del producto',
      date_release: new Date(),
      date_revision: new Date(),
      logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    },
  ];

  beforeEach(() => {
    cleanup();
  });

  test('Check that the table is rendered', () => {
    render(<Table data={data} />);
    const table = screen.queryByRole('table');

    expect(table).toBeInTheDocument();
  });

  test('Check Result Counter', () => {
    render(<Table data={data} />);
    const Label = screen.queryByText(/3 Resultados/i);

    expect(Label).toBeInTheDocument();
  });

  test('Check Table when data = []', () => {
    render(<Table data={[]} />);
    const table = screen.queryByRole('table');
    expect(table).not.toBeInTheDocument();
  });
});
