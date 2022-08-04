import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const storage = localStorage.getItem('videoplayer-current-time');

function timeupdateHandler(event) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(event.seconds)
  );
}

player.on('timeupdate', throttle(timeupdateHandler, 1000));

if (storage) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
