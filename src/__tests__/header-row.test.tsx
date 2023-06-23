import { render, screen, cleanup } from '@testing-library/react';
import HeaderRow from '../components/table/components/header-row';
import { tableHeaders } from '../constants';

describe('@components/HeaderRow', () => {
  beforeEach(() => {
    cleanup();
    render(
      <table>
        <HeaderRow items={tableHeaders} />
      </table>,
    );
  });

  test('Check Table Header', () => {
    const headerRow = screen.queryAllByRole('row');
    const headerCells = screen.queryAllByRole('columnheader');

    expect(headerRow).toHaveLength(1);
    expect(headerCells).toHaveLength(6);

    expect(headerCells[0]).toHaveTextContent(tableHeaders[0]);
    expect(headerCells[1]).toHaveTextContent(tableHeaders[1]);
    expect(headerCells[2]).toHaveTextContent(tableHeaders[2]);
    expect(headerCells[3]).toHaveTextContent(tableHeaders[3]);
    expect(headerCells[4]).toHaveTextContent(tableHeaders[4]);
  });
});
