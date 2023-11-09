export const carousel = (slider) => {
  const z = 300;

  function rotate() {
    if (slider?.track) {
      const deg = 360 * slider?.track?.details?.progress;
      slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
    }
  }

  const onCreated = () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  };

  slider.on('created', onCreated);
  slider.on('detailsChanged', rotate);

  // Cleanup function to remove event listeners and reset styles
  return () => {
    slider.off('created', onCreated);
    slider.off('detailsChanged', rotate);
    slider.slides.forEach((element) => {
      element.style.transform = '';
    });
    if (slider.container) {
      slider.container.style.transform = '';
    }
  };
};
