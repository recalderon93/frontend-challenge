export default function getDefaultReleaseDate(date: Date): Date {
  const today = new Date();
  const isTheSameDay =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  if (date > today) {
		return date;
  }

	if (isTheSameDay) { 
		return date;
	}

  return today;
}
