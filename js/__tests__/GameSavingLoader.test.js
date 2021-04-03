import GameSavingLoader from '../GameSavingLoader';

it('Свойство saveString экземпляра класса должно возвращать строку', () => {
  expect(new GameSavingLoader().saveString)
    .resolves.toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
});

it('Метод load() экземпляра класса должен возвращать объект', () => {
  expect(new GameSavingLoader().load()).resolves.toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
});

it('reject метода load() экземпляра класса должен возвращать ошибку', () => {
  const error = 'Не удалось распарсить строку';
  expect(new GameSavingLoader().load()).resolves.toThrowError(error);
});
