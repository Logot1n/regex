import Validator from '../js/nicknames';
import validateNumberPhones from '../js/numberPhones';

describe('Validator', () => {
  const user = new Validator();

  test.each([
    ['12fdsfsdf', 'Имя пользователя содержит недопустимые символы, запрещено использовать более 3 цифр подряд и начинать и заканчивать никнейм с цифр, нижнего подчеркивания _ и тире -'],
    ['Fsdfsd-fds', 'Пользователь Fsdfsd-fds допустим'],
    ['-fdfsdfds', 'Имя пользователя содержит недопустимые символы, запрещено использовать более 3 цифр подряд и начинать и заканчивать никнейм с цифр, нижнего подчеркивания _ и тире -'],
    ['_fsdfsdfsd', 'Имя пользователя содержит недопустимые символы, запрещено использовать более 3 цифр подряд и начинать и заканчивать никнейм с цифр, нижнего подчеркивания _ и тире -'],
    ['fsdfsdfds-', 'Имя пользователя содержит недопустимые символы, запрещено использовать более 3 цифр подряд и начинать и заканчивать никнейм с цифр, нижнего подчеркивания _ и тире -'],
    ['fsdfdsfsd_', 'Имя пользователя содержит недопустимые символы, запрещено использовать более 3 цифр подряд и начинать и заканчивать никнейм с цифр, нижнего подчеркивания _ и тире -'],
    ['dff_dsds', 'Пользователь dff_dsds допустим'],
  ])('should validate nickname "%s"', (nickname, expected) => {
    const result = user.validateUsername(nickname);
    expect(result).toBe(expected);
  });
});

test('check validateNumberPhones', () => {
  const number1 = '8 (927) 000-00-00';
  const expected1 = 'Номер телефона: +79270000000';
  const result1 = validateNumberPhones(number1);
  expect(result1).toBe(expected1);

  const number2 = 'fgdsfdsfsd';
  const expected2 = 'Некорректный номер телефона';
  const result2 = validateNumberPhones(number2);
  expect(result2).toBe(expected2);
});
