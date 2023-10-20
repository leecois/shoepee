import {
    EllipsisHorizontalIcon
  } from '@heroicons/react/24/outline';
  import ProductOne from '../images/product/product-01.png';
  
  const BrandsListTable = () => {
    return (
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="py-6 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Brands (7)
          </h4>
          <label>Manage brands for Shoepee</label>
        </div>
  
        <div className="grid grid-cols-5 border-t gap-x-4 border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-7 md:px-6 2xl:px-7.5">
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Name</p>
          </div>
  
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="font-medium">Description</p>
          </div>
  
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="font-medium">Date</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium"></p>
          </div>
        </div>
  
        <div className="grid grid-cols-5 border-t gap-x-4 border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-7 md:px-6 2xl:px-7.5">
          <div className="col-span-2 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <img src={ProductOne} alt="Product" />
              </div>
              <p className="text-sm text-black dark:text-white">GUCCI</p>
            </div>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">
              Chelsea Boots, Cowboy Boots, Kitten Heels, Chelsea Boots, Cowboy
              Boots, Kitten Heels,Chelsea Boots, Cowboy Boots, Kitten Heels
            </p>
          </div>
  
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-meta-3">
              Clogs, Technical Trainers, Chelsea Boots, Chelsea Boots, Cowboy
              Boots, Kitten Heels, Chelsea Boots, Cowboy Boots, Kitten Heels
            </p>
          </div>
  
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-5">
              <EllipsisHorizontalIcon class="h-6 w-6" />
            </p>
          </div>
        </div>
  
        <div className="grid grid-cols-5 border-t gap-x-4 border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-7 md:px-6 2xl:px-7.5">
          <div className="col-span-2 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <img src={ProductOne} alt="Product" />
              </div>
              <p className="text-sm text-black dark:text-white">GUCCI</p>
            </div>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="text-sm text-black dark:text-white">
              Chelsea Boots, Cowboy Boots, Kitten Heels, Chelsea Boots, Cowboy
              Boots, Kitten Heels,Chelsea Boots, Cowboy Boots, Kitten Heels
            </p>
          </div>
  
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-meta-3">
              Clogs, Technical Trainers, Chelsea Boots, Chelsea Boots, Cowboy
              Boots, Kitten Heels, Chelsea Boots, Cowboy Boots, Kitten Heels
            </p>
          </div>
  
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-meta-5">
              <EllipsisHorizontalIcon class="h-6 w-6" />
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default BrandsListTable;
  