type DateStringFormatType = 'DD/MM/YYYY' | 'YYYY-MM-DD';

export default function dateParser(date: Date, format: DateStringFormatType): string {
  if (!(date instanceof Date)) {
    return '';
  }

  if (!format || (format !== 'DD/MM/YYYY' && format !== 'YYYY-MM-DD')) {
    return date.toISOString();
  }

  const year = `${date.getFullYear()}`;
  const month = date.getMonth() > 8 ? `${date.getMonth() + 1}` : `0${date.getMonth() + 1}`;
  const day = date.getDate() > 9 ? `${date.getDate()}` : `0${date.getDate()}`;

  return format.replace(/YYYY/i, year).replace(/MM/i, month).replace(/DD/i, day);
}
