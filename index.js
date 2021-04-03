import GameSavingLoader from './js/GameSavingLoader';

new GameSavingLoader().load().then((saving) => console.log(saving));
