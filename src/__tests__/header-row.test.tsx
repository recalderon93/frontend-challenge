import { render, screen, cleanup } from '@testing-library/react';
import HeaderRow from '../components/table/components/header-row';
import { dataDescription, dataHeader } from '../constants';

describe('@components/HeaderRow', () => {
  beforeEach(() => {
    cleanup();
    render(
      <table>
        <HeaderRow headers={dataHeader} description={dataDescription} />
      </table>,
    );
  });

  test('Check Table Header', () => {
    const headerRow = screen.queryAllByRole('row');
    const headerCells = screen.queryAllByRole('columnheader');

    expect(headerRow).toHaveLength(1);
    expect(headerCells).toHaveLength(6);

    expect(headerCells[0]).toHaveTextContent(dataHeader.logo);
    expect(headerCells[1]).toHaveTextContent(dataHeader.name);
    expect(headerCells[2]).toHaveTextContent(dataHeader.description);
    expect(headerCells[3]).toHaveTextContent(dataHeader.date_release);
    expect(headerCells[4]).toHaveTextContent(dataHeader.date_revision);
  });
});
