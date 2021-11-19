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
  const valueTotal = parseFloat(qtd) + parseFloat(value);

  return valueTotal;
}

export function handleMult(qtd: string, value: string) {
  const valueTotal = parseFloat(qtd) * parseFloat(value);

  return valueTotal;
}

export function verifyFloat(value: string) {
  if (!/^\d+(?:\.\d+)?$/.test(value)) {
    const valueFormatted = value.toString().replace(',', '.');

    return valueFormatted;
  } else {
    return value;
  }
}
