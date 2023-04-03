import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

console.log(player);
// player.on('timeupdate', function (data) {
//   const localStorage = {
//     'videoplayer-current-time': data.seconds,
//   };
// });


// player
//   .setCurrentTime()
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });


player.on(
  'timeupdate',function (e) {
    localStorage.setItem('videoplayer-current-time', e.seconds);
    console.log();
  });
// player
//   .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
//   .catch(function (error) {
//     console.error(error);
//   });