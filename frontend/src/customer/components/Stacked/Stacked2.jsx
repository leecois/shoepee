import React from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Stacked2 = ({ brandList }) => {
  useEffect(() => {
    const slider = new KeenSlider('#keen-slider-2', {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 2.5,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById(
      'keen-slider-previous-2'
    );
    const keenSliderNext = document.getElementById('keen-slider-next-2');

    keenSliderPrevious.addEventListener('click', () => slider.prev());
    keenSliderNext.addEventListener('click', () => slider.next());
  }, []);

  return (
    <>
      <section>
        <div className="mx-auto max-w-[1840px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-center lg:gap-8">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <div className="flex flex-col items-center justify-center lg:mt-8">
                <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Brands
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Discover the latest trending styles from Shoepee and bring
                  some refreshing changes to your wardrobe this season.
                </p>

                <div className="flex gap-4 mt-4">
                  <button
                    aria-label="Previous slide"
                    id="keen-slider-previous-2"
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
                    id="keen-slider-next-2"
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
            </div>

            <div className="-mx-6 border shadow-xl lg:col-span-2 lg:mx-0">
              <div id="keen-slider-2" className="keen-slider">
                {brandList?.map((brand) => (
                  <Link
                    to={`/products/?searchKey=${brand.brandName}`}
                    key={brand.id}
                    className="keen-slider__slide"
                  >
                    <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                      <div>
                        <div className="mt-4">
                          <img
                            src={brand.imageUrl}
                            alt={brand.brandName}
                            className="h-100 w-full rounded-lg object-cover object-center dark:bg-gray-500"
                          />
                        </div>
                      </div>
                      <div className="mt-8">
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            <div className="flex flex-col">
                              <div className="text-2xl font-bold text-gray-900">
                                {brand.brandName}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </blockquote>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stacked2;
