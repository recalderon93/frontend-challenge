/* eslint-disable camelcase */
import * as yup from 'yup';
import { formErrorMessages } from '../constants';

const financialProductSchema = yup.object().shape({
  id: yup
    .string()
    .required(formErrorMessages.required)
    .min(3, formErrorMessages.minLength(3))
    .max(10, formErrorMessages.maxLength(10)),
  name: yup
    .string()
    .required(formErrorMessages.required)
    .min(5, formErrorMessages.minLength(5))
    .max(100, formErrorMessages.maxLength(100)),
  description: yup
    .string()
    .required(formErrorMessages.required)
    .min(10, formErrorMessages.maxLength(10))
    .max(200, formErrorMessages.maxLength(200)),
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
      const releaseDate = date_release as Date;
      const expectedReleaseDate = new Date(
        releaseDate.getFullYear() + 1,
        releaseDate.getMonth(),
        releaseDate.getDate(),
      );
      return expectedReleaseDate <= value; // Realizar la comparación
    }),
});

export default financialProductSchema;
