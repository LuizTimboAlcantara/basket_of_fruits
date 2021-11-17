export function FormattedMoney(value: number | string) {
  if (typeof value === 'string') {
    Number(value);
  }

  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}
