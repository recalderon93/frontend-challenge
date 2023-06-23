/* eslint-disable @typescript-eslint/ban-ts-comment */
import dateParser from '../utils/date-parser';
import dinamicLabels from '../utils/dinamic-label';

describe('@utils/dateParser', () => {
  const sampleDate = { day: 20, month: 10, year: 2010 };
  const newDate = new Date(sampleDate.year, sampleDate.month - 1, sampleDate.day);

  test('Check results on Formats', () => {
    // @ts-ignore
    const parsedDate = dateParser(newDate, 'invalid');
    expect(parsedDate).toBe(newDate.toISOString());
  });

  test('Check results on Invalid Date', () => {
    // @ts-ignore
    expect(dateParser('date', 'DD/MM/YYYY')).toBe('');
  });

  test('Check results with format = "DD/MM/YYYY"', () => {
    expect(dateParser(newDate, 'DD/MM/YYYY')).toBe('20/10/2010');
  });

  test('Check results with format = "YYYY-MM-DD"', () => {
    expect(dateParser(newDate, 'YYYY-MM-DD')).toBe('2010-10-20');
  });
});

describe('@utils/dinamicLabels', () => {
  const plural = 'plural';
  const singular = 'singular';

  test('Check Invalid Number Values', () => {
    // @ts-ignore
    expect(dinamicLabels('invalid', singular, plural)).toBe('');
  });

  test('Check with negative with value = -2', () => {
    expect(dinamicLabels(-2, singular, plural)).toBe(plural);
  });

  test('Check with negative with value = -1', () => {
    expect(dinamicLabels(-1, singular, plural)).toBe(singular);
  });

  test('Check with result with value = 0', () => {
    expect(dinamicLabels(0, singular, plural)).toBe(plural);
  });

  test('Check with result with value = 1', () => {
    expect(dinamicLabels(1, singular, plural)).toBe(singular);
  });

  test('Check with result with value = 0', () => {
    expect(dinamicLabels(2, singular, plural)).toBe(plural);
  });
});
