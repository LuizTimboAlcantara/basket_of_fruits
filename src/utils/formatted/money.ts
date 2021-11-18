export function FormattedMoney(value: number | string) {
  if (typeof value === 'string') {
    Number(value);
  }

  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function handleSum(qtd: string, value: string) {
  const valueTotal = Number(qtd) * Number(value);

  return FormattedMoney(valueTotal);
}
