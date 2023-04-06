import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTimeVideo = 'videoplayer-current-time';

player.on(
  'timeupdate',
  _.throttle(function (data) {
    const currentTime = data.seconds;
    localStorage.setItem(currentTimeVideo, currentTime);
  }),
  1000
);


player
  .setCurrentTime(localStorage.getItem(currentTimeVideo))
  .catch(function (error) {});


