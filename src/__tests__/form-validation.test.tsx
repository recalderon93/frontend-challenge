/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable camelcase */
import { formErrorMessages } from '../constants';
import schema from '../utils/form-validation';

describe('@utils/financialProducSchema', () => {
  const validData: DataItem = {
    id: 'trj-crd',
    name: 'Tarjeta de Crédito',
    description: 'Tarjeta de consumo bajo la modalidad de crédito',
    logo: 'https://www.some-image.com',
    date_release: new Date(2024, 3, 3),
    date_revision: new Date(2025, 3, 3),
  };

  async function checkError(
    fieldName: keyof DataItem,
    value: string | Date | undefined,
    expectedError: string,
  ) {
    try {
      await schema.validateAt(fieldName, { [fieldName]: value });
    } catch (e) {
      // @ts-ignore
      expect(e.message).toBe(expectedError);
    }
  }

  test('Test Successfull case', async () => {
    const isValid = await schema.isValid(validData);

    expect(isValid).toBeTruthy();
  });

  test('Test invalid ID', async () => {
    const shortId = new Array(2).fill('a').join('');
    const longId = new Array(11).fill('a').join('');

    checkError('id', undefined, formErrorMessages.required);
    checkError('id', shortId, formErrorMessages.minLength(3));
    checkError('id', longId, formErrorMessages.maxLength(10));
  });

  test('Test invalid name', async () => {
    const shortName = new Array(3).fill('a').join('');
    const longName = new Array(101).fill('a').join('');

    checkError('name', shortName, formErrorMessages.minLength(5));
    checkError('name', longName, formErrorMessages.maxLength(100));
  });

  test('Test invalid description', async () => {
    const shortName = new Array(10).fill('a').join('');
    const longName = new Array(201).fill('a').join('');

    checkError('description', shortName, formErrorMessages.minLength(10));
    checkError('description', longName, formErrorMessages.maxLength(200));
  });

  test('Test invalid Logo', async () => {
    checkError('logo', undefined, formErrorMessages.required);
  });

  test('Test invalid date_release & revision_date', async () => {
    checkError('date_release', undefined, formErrorMessages.required);
    checkError('date_revision', undefined, formErrorMessages.required);

    expect(await schema.isValid({ ...validData, date_release: new Date(2021, 3, 3) })).toBeFalsy();
  });

  test('Test date_revision less than a year from date_release', async () => {
    expect(
      await schema.isValid({
        ...validData,
        date_release: new Date(2024, 7, 3),
        date_revision: new Date(2025, 3, 3),
      }),
    ).toBeFalsy();
  });
});
