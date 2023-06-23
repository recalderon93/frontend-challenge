export default function dinamicLabels(value: number, singularLabel: string, pluralLabel: string) {
  if (typeof value !== 'number') {
    return '';
  }

  if (value === 1 || value === -1) {
    return singularLabel || '';
  }

  return pluralLabel || '';
}
