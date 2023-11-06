import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './styles.css';
import useBrandData from '../../../hooks/useBrandData';

const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on('created', () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on('detailsChanged', rotate);
};

export default function StackedCenter() {
  const { brandList } = useBrandData();
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: '.carousel__cell',
      renderMode: 'custom',
      mode: 'free-snap',
    },
    [carousel]
  );

  return (
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          {brandList?.map((brand) => (
            <div key={brand.id} className="carousel__cell number-slide">
              <a
                href="#"
                className="group h-full w-full  relative block bg-black"
              >
                <img
                  alt="Developer"
                  src={brand.imageUrl}
                  className="absolute inset-0 h-full w-full object-cover opacity-65 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 ">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Brand
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    {brand.brandName}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
