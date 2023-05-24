export default function validateNumberPhones(numberPhones) {
  if (!/\d/.test(numberPhones)) {
    return 'Некорректный номер телефона';
  }
  let deletedSymbols = numberPhones.replace(/\D/g, ''); // удаляет все нецифры
  if (deletedSymbols[0] === '8') {
    deletedSymbols = deletedSymbols.replace(/^8/, '7');
  }
  const rightNumber = `+${deletedSymbols}`; // добавляем + в начало номера
  return `Номер телефона: ${rightNumber}`;
}
