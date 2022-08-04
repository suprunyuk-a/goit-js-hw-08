import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function timeupdateHandler(event) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(event.seconds)
  );
  console.log(localStorage.getItem('videoplayer-current-time'));
}

player.on('timeupdate', throttle(timeupdateHandler, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
