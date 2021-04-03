import json from '../json';
import read from '../read';

it('Функция должна возвращать строку', () => {
  expect(json(read())).resolves
    .toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
});

it('reject функции должен возвращать ошибку', () => {
  const error = 'Не удалось раскодировать данные!';
  expect(read()).resolves.toThrowError(error);
});
