export default function json(data) {
  return new Promise((resolve, reject) => {
    // эмуляция обработки ArrayBuffer
    setTimeout(() => {
      resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
      reject(new Error('Не удалось раскодировать данные!'));
    }, 500);
  });
}
