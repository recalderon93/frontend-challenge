/* eslint-disable camelcase */
export const dataHeader: Record<keyof DataItem, string> = {
  id: 'ID',
  logo: 'Logo',
  name: 'Nombre del Producto',
  description: 'Descripción',
  date_release: 'Fecha de Liberación',
  date_revision: 'Fecha de Revisión',
};

export const dataDescription: Record<keyof DataItem, string> = {
  id: 'Identificador único del producto.',
  logo: 'Url de un logo representativo para el producto.',
  name: 'Nombre del Producto.',
  description: 'Descripción del Producto.',
  date_release: 'Fecha a liberar el producto para los clientes en General.',
  date_revision: 'Fecha de revisión del producto para cambiar Términos y Condiciones.',
};

export const itemOrder: Partial<keyof DataItem>[] = [
  'logo',
  'name',
  'description',
  'date_release',
  'date_revision',
];

export const tableHeaders = itemOrder.map((item) => dataHeader[item]);

export const formErrorMessages = {
  required: 'Este campo es requerido.',
  invalidId: 'Invalido, ya existe un servicio con este ID',
  minLength: (minLength: number) => `Este campo debe tener al menos ${minLength} caracteres`,
  maxLength: (maxLength: number) => `Este campo debe tener al menos ${maxLength} caracteres`,
  invalidLiberationDate: 'La Fecha debe ser igual o mayor a la fecha actual',
  invalidRevisionDate: 'La Fecha debe ser exactamente un año posterior a la fecha de liberación',
};
