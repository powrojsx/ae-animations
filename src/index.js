import lottie from 'lottie-web';

const $button = document.querySelector('.btn');
const $modal = document.querySelector('.modal');
const $backgroundWrapper = document.querySelector('.background-wrapper');
const $animationWrapper = document.querySelector('.animation-wrapper');

const animations = {
  boom: `https://assets10.lottiefiles.com/datafiles/U1I3rWEyksM9cCH/data.json`,
  waves: `https://assets2.lottiefiles.com/datafiles/N8DaINa2dmLOJja/data.json`
};

const boomAnimation = lottie.loadAnimation({
  container: $animationWrapper,
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: animations.boom
});

lottie.loadAnimation({
  container: $backgroundWrapper,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: animations.waves
});

$button.addEventListener('click', () => {
  $modal.classList.add('modal--is-open');
  boomAnimation.play();
});

$modal.addEventListener('click', () => {
  $modal.classList.remove('modal--is-open');
});
