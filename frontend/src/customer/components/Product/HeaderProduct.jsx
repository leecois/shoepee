import { Menu } from '@headlessui/react';
import {
  ChevronDownIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HeaderProduct = ({ onSort, setOpenFilter }) => {
  const navigate = useNavigate();
  const [focused, setFocused] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortOptions = [
    { name: 'Price: Low to High', value: 'price_asc' },
    { name: 'Price: High to Low', value: 'price_desc' },
  ];

  const handleSort = (value) => {
    onSort(value);
    queryParams.set('sort', value);
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  const [searchKey, setSearchKey] = useState(
    queryParams.get('searchKey') || ''
  );

  const handleSearch = (event) => {
    const newSearchKey = event.target.value;
    setSearchKey(newSearchKey);
    queryParams.set('searchKey', newSearchKey);
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  return (
    <div className="px-4 py-6 flex flex-col sm:flex-row items-center justify-between space-y-5 sm:space-y-0 border-b border-gray-200 bg-[#f8f8f8]">
      <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
        Shoepee By You Shoes
      </h2>
      <div className="flex items-center space-x-5">
        <div className="relative overflow-hidden">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <span className="absolute inset-y-0 left-0 pl-3 inline-flex items-center pointer-events-none">
            <MagnifyingGlassIcon
              className="h-6 w-6 text-gray-400"
              aria-hidden="true"
            />
          </span>
          {/* Input */}
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search"
            className="form-input pl-11 w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 focus:border-gray-300 focus:ring-0"
            onFocus={() => setFocused(5)}
            onBlur={() => setFocused(null)}
            onChange={handleSearch}
            value={searchKey}
          />
          <span
            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-800 transition-all duration-300 ease-in transform ${
              focused === 5 ? 'w-full' : 'w-0'
            }`}
            aria-hidden="true"
          />
        </div>
        <Menu as="div" className="relative">
          <Menu.Button className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-black">
            Sort by <ChevronDownIcon className="ml-2 w-5 h-5" />
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-4 p-2 w-40 flex flex-col rounded-md shadow-2xl bg-white origin-top-right">
            {sortOptions.map((option) => (
              <Menu.Item key={option.value}>
                {({ active }) => (
                  <button
                    className={`p-1 block rounded ${
                      active
                        ? 'bg-gray-50'
                        : option.current
                        ? 'bg-blue-50 text-blue-500'
                        : 'bg-transparent text-gray-400'
                    } text-base font-medium whitespace-nowrap`}
                    onClick={() => handleSort(option.value)}
                  >
                    {option.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
        <button
          className="p-2 text-gray-500 hover:text-black"
          onClick={() => setOpenFilter(true)}
        >
          <FunnelIcon className="w-6 h-6" />
        </button>
        <button className="p-2 text-gray-500 hover:text-black lg:hidden">
          <RectangleGroupIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default HeaderProduct;
