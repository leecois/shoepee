// StackedCenter.js
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import React, { useLayoutEffect } from 'react';
import { carousel } from './carousel';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';

const Slide = ({ brand, onClick }) => (
  <div className="carousel__cell" onClick={onClick}>
    <Link
      to={`/products?brand=${brand.brandName}`}
      className="block w-full h-full"
    >
      <img
        alt={brand.brandName}
        src={brand.imageUrl}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-75"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-50"></div>
      <div className="relative p-4 sm:p-6 lg:p-8 flex flex-col justify-end h-full">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
          Brand
        </p>
        <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl drop-shadow-md">
          {brand.brandName}
        </h3>
        <p className="text-white text-opacity-80 mt-2">{brand.description}</p>
      </div>
    </Link>
  </div>
);

export default function StackedCenter({ brandList }) {
  const navigate = useNavigate();

  const handleBrandClick = (brandName) => {
    navigate(`/products?brand=${brandName}`);
  };
  const [sliderRef, slider] = useKeenSlider(
    {
      loop: true,
      selector: '.carousel__cell',
      renderMode: 'custom',
      mode: 'free-snap',
    },
    [carousel]
  );

  useLayoutEffect(() => {
    if (slider?.track?.details) {
      const z = 300;
      const totalSlides = slider.slides.length;
      const deg = 360 * slider.track.details.progress;
      slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;

      const degree = 360 / totalSlides;
      slider.slides.forEach((element, idx) => {
        element.style.transform = `rotateY(${
          degree * idx
        }deg) translateZ(${z}px)`;
      });
    } else {
      console.warn('Slider not initialized or track details unavailable');
    }
  }, [slider, brandList.length]);

  return (
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          {brandList.map((brand, index) => (
            <Slide key={brand.id || index} brand={brand} onClick={() => handleBrandClick(brand.brandName)} />
          ))}
        </div>
      </div>
    </div>
  );
}
