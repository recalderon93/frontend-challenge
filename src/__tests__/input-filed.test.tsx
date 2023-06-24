/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import InputFieldWrapper from '../components/input-field/input-field';
import { UseFormRegister, useForm } from 'react-hook-form';

describe('@component/InputFieldWrapper', () => {
  const inputLabel = 'TestLabel';
  const errorMsg = 'Error msg';

  beforeEach(() => {
    cleanup();

    const MockForm = () => {
      const { register } = useForm<DataItem>();
      return (
        <InputFieldWrapper
          fieldName='id'
          label={inputLabel}
          register={register}
          type='text'
          errorMsg={errorMsg}
        />
      );
    };
    render(<MockForm />);
  });

  test('Check that the Error Message is showed', () => {
    const errorSpan = screen.queryByText(errorMsg);
    expect(errorSpan).toBeInTheDocument();
  });

  // test('Check input type = "date"', () => {
  //   cleanup();
  //   const fn = jest.fn();
  //   const inputValue = 'testValue';

  //   render(
  //     <InputFieldWrapper
  //       fieldName='date_release'
  //       label={inputLabel}
  //       register={{} as UseFormRegister<DataItem>}
  //       type='date'
  //       onChange={fn}
  //       value={inputValue}
  //     />,
  //   );

  //   const input = screen.queryByDisplayValue(inputValue);

  //   expect(input).toBeInTheDocument();

  //   // @ts-ignore
  //   fireEvent.change(input, { value: '2025-10-10' });

  //   expect(fn).toBeCalled();
  // });
  // test('Check input type = "date"', () => {
  //   cleanup();
  //   const fn = jest.fn();

  //   const MockForm = () => {
  //     const { register } = useForm<DataItem>();
  //     return (
  //       <InputFieldWrapper
  //         fieldName='date_release'
  //         label={inputLabel}
  //         register={register}
  //         type='date'
  //         onChange={fn}
  //         disabled
  //       />
  //     );
  //   };

  //   render(<MockForm />);

  //   const input = screen.queryByLabelText('date_release');

  //   expect(input).toHaveProperty('disabled', true);

  //   expect(fn).toBeCalled();
  // });
});
