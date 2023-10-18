import React, { useEffect, useState } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  RectangleGroupIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import productApi from "../../../api/productApi";
import ProductList from "./ProductList";
import PropTypes from "prop-types";

ProductList.propTypes = {
  data: PropTypes.array,
};

ProductList.propTypes = {
  data: [],
};

const Product = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll({ _page: 1, _limit: 10 });
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const [openFilter, setOpenFilter] = useState(true);

  const [sortOptions, setSortOptions] = useState([
    { name: "Most Popular", href: "#", current: true },
    { name: "Newest", href: "#", current: false },
    { name: "Best Rating", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ]);

  const subCategories = [
    { name: "Sneaker", href: "#" },
    { name: "Women Shoe", href: "#" },
    { name: "Men Shoe", href: "#" },
    { name: "Running", href: "#" },
    { name: "Black Friday", href: "#" },
  ];

  const filters = [
    {
      id: "color",
      name: "Color",
      options: [
        {
          value: "black",
          label: "Black",
          class: "bg-black text-black",
          checked: false,
        },
        {
          value: "yellow",
          label: "Yellow",
          class: "bg-yellow-400 text-yellow-400",
          checked: false,
        },
        {
          value: "blue",
          label: "Blue",
          class: "bg-blue-400 text-blue-400",
          checked: true,
        },
        {
          value: "purple",
          label: "Purple",
          class: "bg-purple-400 text-purple-400",
          checked: false,
        },
        {
          value: "green",
          label: "Green",
          class: "bg-green-400 text-green-400",
          checked: false,
        },
        {
          value: "red",
          label: "Red",
          class: "bg-red-400 text-red-400",
          checked: false,
        },
      ],
    },
    {
      id: "price",
      name: "Shop By Price",
      options: [
        { value: "2tr", label: "2,000,001 - 4,999,999", checked: false },
        { value: "5tr", label: "Over 5,000,000", checked: false },
      ],
    },
    {
      id: "brand",
      name: "Brand",
      options: [
        { value: "Gucci", label: "Gucci", checked: false },
        { value: "Nike", label: "Nike", checked: false },
      ],
    },
  ];

  const sortBy = (value) => {
    const updatedSortOptions = sortOptions.map((option) => ({
      ...option,
      current: option.name === value,
    }));
    setSortOptions(updatedSortOptions);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setOpenFilter(true);
      }
    });
  }, []);

  return (
    <div className="relative mx-auto py-8 sm:py-16 px-4 w-auto">
      <div className="grid grid-cols-4 gap-y-8 gap-x-4">
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
                      <a
                        href={option.href}
                        className={`p-1 block rounded ${
                          active
                            ? "bg-gray-50"
                            : option.current
                            ? "bg-blue-50 text-blue-500"
                            : "bg-transparent text-gray-400"
                        } text-base font-medium whitespace-nowrap`}
                        onClick={() => sortBy(option.name)}
                      >
                        {option.name}
                      </a>
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
        <div
          className={`lg:hidden absolute inset-0 bg-gray-500 bg-opacity-75 ${
            openFilter ? "visible" : "invisible"
          }`}
        />
        <div
          className={`col-span-1 absolute top-0 right-0 lg:inset-0 lg:relative w-full h-full max-h-full max-w-xs overflow-y-scroll lg:overflow-auto bg-gray-50 transition-all duration-300 ease-in-out ${
            openFilter ? "left-0 opacity-100" : "-left-full opacity-0"
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
          <div className="mt-5 pb-5 pl-5 border-b border-gray-200">
            <ul className="flex flex-col items-start space-y-2">
              {subCategories.map((subcategory) => (
                <li key={subcategory.name}>
                  <a
                    href={subcategory.href}
                    className="text-base text-gray-700 font-semibold hover:text-blue-400"
                  >
                    {subcategory.name}
                  </a>
                </li>
              ))}
            </ul>
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
                      open && "bg-blue-50"
                    }`}
                  >
                    <Disclosure.Button className="group flex items-center justify-between">
                      <span className="text-base text-gray-700 font-semibold">
                        {section.name}
                      </span>
                      <ChevronRightIcon
                        className={`w-6 h-6 ${
                          open
                            ? "transform rotate-90"
                            : "text-gray-400 group-hover:text-gray-700"
                        }`}
                      />
                    </Disclosure.Button>
                    {section.id === "color" && (
                      <Disclosure.Panel className="mt-5 flex flex-wrap items-center">
                        {section.options.map((option) => (
                          <div className="m-2">
                            <label
                              htmlFor={option.label}
                              className="sr-only"
                            >{`Color ${option.label}`}</label>
                            <input
                              type="checkbox"
                              name={option.label}
                              id={option.label}
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              className={`form-checkbox w-6 h-6 rounded-full border-none ${option.class} focus:ring-gray-200`}
                            />
                          </div>
                        ))}
                      </Disclosure.Panel>
                    )}
                    {section.id !== "color" && (
                      <Disclosure.Panel className="mt-5 flex flex-col">
                        {section.options.map((option) => (
                          <div className="m-1 flex items-center space-x-3">
                            <div>
                              <label
                                htmlFor={option.label}
                                className="sr-only"
                              >{`Color ${option.label}`}</label>
                              <input
                                type="checkbox"
                                name={option.label}
                                id={option.label}
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                className="form-checkbox h-5 w-5 border-gray-300 rounded text-blue-400 focus:ring-blue-400"
                              />
                            </div>
                            <span className="text-base text-gray-700">
                              {option.label}
                            </span>
                          </div>
                        ))}
                      </Disclosure.Panel>
                    )}
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
        {/* Product */}
        <ProductList data={productList} />
      </div>
    </div>
  );
};

export default Product;
