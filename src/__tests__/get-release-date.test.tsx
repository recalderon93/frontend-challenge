import getDefaultReleaseDate from '../utils/get-default-release-date';

describe('@utils/getDefaultReleaseDate', () => {
  const today = new Date();

  test('Check response on date greater that today', () => {
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    expect(getDefaultReleaseDate(date)).toEqual(date);
  });

  test('Check response on date lesser that today', () => {
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);

    expect(getDefaultReleaseDate(date).getFullYear()).toEqual(today.getFullYear());
    expect(getDefaultReleaseDate(date).getMonth()).toEqual(today.getMonth());
    expect(getDefaultReleaseDate(date).getDate()).toEqual(today.getDate());
  });

  test('Check response on date is the same day that today', () => {
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    expect(getDefaultReleaseDate(date)).toEqual(date);
  });
});
