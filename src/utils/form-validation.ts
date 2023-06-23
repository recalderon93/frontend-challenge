/* eslint-disable camelcase */
import * as yup from 'yup';
import { formErrorMessages } from '../constants';

const financialProductSchema = yup.object().shape({
  id: yup
    .string()
    .min(3, formErrorMessages.minLength(3))
    .max(10, formErrorMessages.maxLength(10))
    .required(formErrorMessages.required),
  name: yup
    .string()
    .min(5, formErrorMessages.minLength(5))
    .max(100, formErrorMessages.maxLength(100))
    .required(formErrorMessages.required),
  description: yup
    .string()
    .min(10, formErrorMessages.maxLength(10))
    .max(200, formErrorMessages.maxLength(200))
    .required(formErrorMessages.required),
  logo: yup.string().required(formErrorMessages.required),
  date_release: yup
    .date()
    .min(new Date(), formErrorMessages.invalidLiberationDate)
    .required(formErrorMessages.required),
  date_revision: yup
    .date()
    .required(formErrorMessages.required)
    .test('date_comparison', formErrorMessages.invalidRevisionDate, function (value) {
      const { date_release } = this.parent; // Obtener el valor de date_release
      const expectedReleaseDate = date_release as Date;
      expectedReleaseDate.setFullYear(expectedReleaseDate.getFullYear() + 1); // Increase a year;
      return expectedReleaseDate <= value; // Realizar la comparación
    }),
});

export default financialProductSchema;
