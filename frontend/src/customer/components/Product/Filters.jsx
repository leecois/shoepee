import { Disclosure } from '@headlessui/react';
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import useBrandData from '../../../hooks/useBrandData';

const Filters = ({
  openFilter,
  setOpenFilter,
  selectedBrands,
  setSelectedBrands,
}) => {
  const { brandList } = useBrandData();

  const handleBrandFilterChange = (brandName) => {
    setSelectedBrands((prevSelectedBrands) => {
      if (prevSelectedBrands.includes(brandName)) {
        return prevSelectedBrands.filter((brand) => brand !== brandName);
      } else {
        return [...prevSelectedBrands, brandName];
      }
    });
  };

  const filters = [
    {
      id: 'brand',
      name: 'Brand',
      options: brandList.map((brand) => ({
        key: brand.id,
        value: brand.brandName,
        label: brand.brandName,
      })),
    },
  ];

  return (
    <>
      <div
        className={`lg:hidden absolute inset-0 bg-gray-500 bg-opacity-75 ${
          openFilter ? 'visible' : 'invisible'
        }`}
      />
      <div
        className={`col-span-1 bg-white min-h-screen absolute top-0 right-0 lg:inset-0 lg:relative w-full h-full max-h-full max-w-xs overflow-y-scroll lg:overflow-auto transition-all duration-300 ease-in-out ${
          openFilter ? 'left-0 opacity-100' : '-left-full opacity-0'
        }`}
      >
        <div className="lg:hidden py-5 px-5 flex items-center justify-between border-b border-gray-200">
          <h3 className="text-2xl text-gray-700 font-semibold">Filters</h3>
          <button
            className="text-gray-400 hover:text-gray-700"
            onClick={() => setOpenFilter(false)}
          >
            <XCircleIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="lg:hidden relative m-5">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search"
            className="form-input pl-11 pr-5 w-44 block shadow-sm rounded-full border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
          />
          <span className="absolute top-1/2 left-3 text-gray-400 transform -translate-y-1/2">
            <MagnifyingGlassIcon className="w-4 h-4" />
          </span>
        </div>
        <div>
          {filters.map((section) => (
            <Disclosure
              as="div"
              key={section.id}
              className="border-b border-gray-200"
            >
              {({ open }) => (
                <div
                  className={`py-5 pl-5 pr-3 flex flex-col ${
                    open && 'border-t border-gray-200'
                  }`}
                >
                  <Disclosure.Button className="group flex items-center justify-between">
                    <span className="text-base text-gray-700 font-semibold">
                      {section.name}
                    </span>
                    <ChevronRightIcon
                      className={`w-6 h-6 ${
                        open
                          ? 'transform rotate-90'
                          : 'text-gray-400 group-hover:text-gray-700'
                      }`}
                    />
                  </Disclosure.Button>
                  {section.id === 'brand' && (
                    <Disclosure.Panel className="mt-5 flex flex-col">
                      <div className=" flex flex-wrap items-center gap-2">
                        {section.options.map((option) => (
                          <button
                            key={option.value}
                            onClick={() =>
                              handleBrandFilterChange(option.value)
                            }
                            className={`text-base ${
                              selectedBrands.includes(option.value)
                                ? 'btn btn-outline btn-ghost '
                                : 'btn btn-navy'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  )}
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filters;
