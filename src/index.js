import lottie from 'lottie-web';

const $button = document.querySelector('.btn');
const $modal = document.querySelector('.modal');
const $animationWrapper = document.querySelector('.animation-wrapper');

const animationPath = `https://assets10.lottiefiles.com/datafiles/U1I3rWEyksM9cCH/data.json`;

const boomAnimation = lottie.loadAnimation({
  container: $animationWrapper,
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: animationPath
});

$button.addEventListener('click', () => {
  $modal.classList.add('modal--is-open');
  boomAnimation.play();
});
