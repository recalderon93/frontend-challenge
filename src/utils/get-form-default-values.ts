/* eslint-disable camelcase */
import getDefaultReleaseDate from './get-default-release-date';

export default function getFormDefaultValues(defaultValues?: DataItem): Partial<DataItem> {
  const defaultReleaseDate = defaultValues
    ? getDefaultReleaseDate(new Date(defaultValues.date_release))
    : new Date();
  const defaultRevisionDate = new Date(
    defaultReleaseDate.getFullYear() + 1,
    defaultReleaseDate.getMonth(),
    defaultReleaseDate.getDate(),
  );

  return defaultValues
    ? {
        ...defaultValues,
        date_release: defaultReleaseDate,
        date_revision: defaultRevisionDate,
      }
    : {
        date_release: defaultReleaseDate,
        date_revision: defaultRevisionDate,
      };
}
