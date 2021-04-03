import read from '../read';

it('resolve функции должен быть определен', () => {
  expect(read()).resolves.toBeDefined();
});

it('reject функции должен возвращать ошибку', () => {
  const error = 'Не удалось закодировать данные!';
  expect(read()).resolves.toThrowError(error);
});
