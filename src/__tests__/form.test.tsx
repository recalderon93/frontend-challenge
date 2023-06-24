/* eslint-disable camelcase */
import {
  render,
  cleanup,
  screen,
  queryAllByRole,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import Form from '../components/form/form';
import { act } from 'react-dom/test-utils';

describe('@components/Form', () => {
  const onSubmitMock = jest.fn();
  const formTitle = 'FormTitle';
  const today = new Date();

  const defaultValues: DataItem = {
    id: 'hip-1',
    name: 'Product Name',
    description: 'Product Description',
    logo: 'logo',
    date_release: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
    date_revision: new Date(today.getFullYear() + 1, today.getMonth(), today.getDate() + 1),
  };

  beforeEach(() => {
    cleanup();
    render(
      <Form
        formType='Update_Product'
        onSubmit={onSubmitMock}
        title={formTitle}
        defaultValues={defaultValues}
      />,
    );
  });

  test('Check Form Input', () => {
    const buttons = screen.queryAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  test('Check the text Inputs', () => {
    const idInput = screen.queryByDisplayValue(defaultValues.id);
    const nameInput = screen.queryByDisplayValue(defaultValues.name);
    const descriptionInput = screen.queryByDisplayValue(defaultValues.description);

    expect(idInput).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
  });

  test('Check Buttons', async () => {
    const inputs = screen.queryAllByRole('textbox');
    expect(inputs).toHaveLength(4);
  });

  test('Revision Date Input', () => {
    const dateInput = screen.queryByLabelText('date_revision');
    const dateInput2 = screen.queryByLabelText('date_release');
    expect(dateInput).toBeInTheDocument();
    expect(dateInput2).toBeInTheDocument();

    expect(dateInput2).toHaveValue(
      `${today.getFullYear()}-${
        today.getMonth() > 8 ? today.getMonth() + 1 : `0${today.getMonth() + 1}`
      }-${today.getDate() + 1}`,
    );
  });

  test('Reset', async () => {
    const resetButton = screen.queryAllByRole('button');
    expect(resetButton[0]).toHaveTextContent('Reiniciar');
    const initialInputs = screen.queryAllByRole('textbox');
    expect(initialInputs[1]).toHaveValue(defaultValues.name);
    fireEvent.change(initialInputs[1], { target: { value: 'New Name' } });
    await act(() => fireEvent.click(resetButton[0]));

    const finalInputs = screen.queryAllByRole('textbox');
    expect(finalInputs[1]).toHaveValue(defaultValues.name);

    await act(() => fireEvent.click(resetButton[1]));
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });
});
