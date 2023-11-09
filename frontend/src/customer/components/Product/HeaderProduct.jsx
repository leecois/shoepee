import { Menu } from '@headlessui/react';
import {
  ChevronDownIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HeaderProduct = ({ onSort, openFilter, setOpenFilter }) => {
  const navigate = useNavigate();
  const sortOptions = [
    { name: 'Best Rating', value: 'rating' },
    { name: 'Price: Low to High', value: 'price_asc' },
    { name: 'Price: High to Low', value: 'price_desc' },
  ];
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sort = queryParams.get('sort') || 'popularity';

  const handleSort = (value) => {
    onSort(value);
    const query = new URLSearchParams(location.search);
    query.set('sort', value);
    navigate(`${location.pathname}?${query.toString()}`);
  };

  const handleSearch = (event) => {
    const query = new URLSearchParams(location.search);
    query.set('q', event.target.value);
    navigate(`${location.pathname}?${query.toString()}`);
  };

  return (
    <div className="col-span-full pb-6 flex flex-col sm:flex-row items-center justify-between space-y-5 sm:space-y-0 border-b border-gray-200">
      <h2 className="text-3xl font-bold">Shoepee By You Shoes</h2>
      <div className="flex items-center space-x-5">
        <div className="hidden lg:inline-block relative">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search"
            className="form-input pl-11 pr-5 w-44 block shadow-sm rounded-full border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
            onChange={handleSearch}
          />
          <span className="absolute top-1/2 left-3 text-gray-400 transform -translate-y-1/2">
            <MagnifyingGlassIcon className="w-4 h-4" />
          </span>
        </div>
        <Menu as="div" className="flex-shrink-0 relative">
          <Menu.Button className="inline-flex items-center text-base text-gray-400 font-semibold hover:text-gray-700">
            Sort by
            <ChevronDownIcon className="w-5 h-5" />
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-4 p-2 w-40 flex flex-col rounded-md shadow-2xl bg-white origin-top-right">
            {sortOptions.map((option) => (
              <Menu.Item key={option.name}>
                {({ active }) => (
                  <button
                    className={`p-1 block rounded ${
                      active
                        ? 'bg-gray-50'
                        : sort === option.name
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
        <button className="text-gray-400 hover:text-blue-400">
          <RectangleGroupIcon className="w-6 h-6" />
        </button>
        <button
          className="lg:hidden text-gray-400 hover:text-blue-400"
          onClick={() => setOpenFilter(!openFilter)}
        >
          <FunnelIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default HeaderProduct;
