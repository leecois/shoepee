import { Menu } from '@headlessui/react';
import {
  ChevronDownIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HeaderProduct = ({ onSort, setOpenFilter }) => {
  const navigate = useNavigate();
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

  const handleSearch = (event) => {
    queryParams.set('searchKey', event.target.value);
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  return (
    <div className="px-4 py-6 flex flex-col sm:flex-row items-center justify-between space-y-5 sm:space-y-0 border-b border-gray-200 bg-[#f8f8f8]">
      <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
        Shoepee By You Shoes
      </h2>
      <div className="flex items-center space-x-5">
        <div className="relative">
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search"
            className="form-input pl-10 pr-4 w-44 block shadow-sm rounded-full border border-gray-300 bg-white text-sm placeholder-gray-400 focus:border-black focus:ring-black"
            onChange={handleSearch}
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        </div>
        <Menu as="div" className="relative">
          <Menu.Button className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-black">
            Sort by <ChevronDownIcon className="ml-2 w-5 h-5" />
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            {sortOptions.map((option) => (
              <Menu.Item key={option.value}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } group flex w-full items-center px-4 py-2 text-sm`}
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
