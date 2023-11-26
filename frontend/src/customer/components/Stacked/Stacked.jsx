import React from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Stacked = ({ modelList2 }) => {
  useEffect(() => {
    const slider1 = new KeenSlider('#keen-slider-1', {
      loop: true,
      rtl: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 3.5,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById(
      'keen-slider-previous-1'
    );
    const keenSliderNext = document.getElementById('keen-slider-next-1');

    keenSliderPrevious.addEventListener('click', () => slider1.next());
    keenSliderNext.addEventListener('click', () => slider1.prev());

    return () => {
      slider1.destroy();
    };
  }, []);

  return (
    <div>
      <section>
        <div className="my-auto max-w-full py-12 lg:me-0 lg:py-16 xl:py-24">
          <div className="max-w-7xl ml-16 flex justify-start sm:pe-6 lg:pe-8">
            <h2 className="max-w-xl mb-2 text-xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              You Might Also Like
            </h2>
            <div className="ml-10 flex gap-4 lg:mt-0 mr-8 ">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-1"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next-1"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 mt-8 border shadow-xl lg:col-span-2 lg:mx-0">
            <div id="keen-slider-1" className="keen-slider">
              {modelList2?.map((model) => (
                <Link
                  to={`/products/${model.modelname}`}
                  key={model.id}
                  className="keen-slider__slide"
                >
                  <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                    <div>
                      <div className="mt-4">
                        <img
                          src={model.shoes[0]?.imageUrl}
                          alt={model.modelname}
                          className="h-100 w-full rounded-lg object-cover object-center dark:bg-gray-500"
                        />
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <div className="flex flex-col">
                            <div className="text-2xl font-bold text-gray-900">
                              {model.modelname}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                              {model.brandId}
                            </div>
                          </div>
                        </div>
                        <p className="text-xl font-semibold text-gray-900">
                          {model.shoes[0]?.price.toLocaleString('de-DE')} VND
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stacked;
