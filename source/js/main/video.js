(function () {
  const modileVideo = document.querySelector('.js-mobile-video');
  const modileVideoButton = document.querySelector('.js-mobile-video-button');

  modileVideoButton.addEventListener('click', () => {
    modileVideoButton.classList.add('fadeOut');
    setTimeout(()=>{
      modileVideoButton.classList.add('visually-hidden');
      modileVideo.play();
    },300)
  })

  modileVideo.addEventListener('click', () => {
    modileVideoButton.classList.remove('fadeOut');
    modileVideoButton.classList.remove('visually-hidden');
    modileVideoButton.classList.add('fadeIn');
    setTimeout(()=>{
      modileVideo.pause();
    },300)
  })




})();
