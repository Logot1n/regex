export default class Validator {
  validateUsername(nickname) {
    const regEx = /^[a-z0-9_-]+$/i; // разрешенные символы
    const errorRegEx = /^(?!.*\d{4})[^\d_-][\w\d_-]*[^\d_-]$/; // запрет на более 3 цифр подряд, начало и конец строки и любое количество символов
    if (regEx.test(nickname) && errorRegEx.test(nickname)) {
      return `Пользователь ${nickname} допустим`;
    }
    return 'Имя пользователя содержит недопустимые символы, запрещено использовать более 3 цифр подряд и начинать и заканчивать никнейм с цифр, нижнего подчеркивания _ и тире -';
  }
}
