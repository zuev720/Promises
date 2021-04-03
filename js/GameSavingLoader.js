import json from './json';
import read from './read';

export default class GameSavingLoader {
  constructor() {
    this.saveString = read().then(((buffer) => json(buffer))).catch((error) => error);
  }

  load() {
    return new Promise((resolve, reject) => {
      this.saveString.then((jsonString) => {
        resolve(JSON.parse(jsonString.toString()));
        reject(new Error('Не удалось распарсить строку'));
      });
    }).catch((error) => error);
  }
}
