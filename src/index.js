import lottie from 'lottie-web';

const $button = document.querySelector('.btn');
const $modal = document.querySelector('.modal');
const $modalTextField = document.querySelector('.modal__text-field');
const $backgroundWrapper = document.querySelector('.background-wrapper');
const $animationWrapper = document.querySelector('.animation-wrapper');

let counter = 0;

const animations = {
  boom: `https://assets10.lottiefiles.com/datafiles/U1I3rWEyksM9cCH/data.json`,
  waves: `https://assets2.lottiefiles.com/datafiles/N8DaINa2dmLOJja/data.json`
};

lottie.loadAnimation({
  container: $backgroundWrapper,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: animations.waves
});

const boomAnimation = lottie.loadAnimation({
  container: $animationWrapper,
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: animations.boom
});

boomAnimation.onLoopComplete = () => {
  counter++;
  $modalTextField.textContent = `Animation interations: ${counter}`;
};

$button.addEventListener('click', () => {
  $modal.classList.add('modal--is-open');
  boomAnimation.play();
});

$modal.addEventListener('click', () => {
  $modal.classList.remove('modal--is-open');
  boomAnimation.stop();
});
