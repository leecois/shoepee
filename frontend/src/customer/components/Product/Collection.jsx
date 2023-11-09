import React from 'react';

const Collection = () => {
  return (
    <section>
      <div className="max-w-screen-xl py-8 mx-auto sm:py-12">
        <header>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-3xl">
            GET STARTED WITH A BLANK CANVAS
          </h2>

          <p className="max-w-md mt-4 text-gray-500">
            Create your unique pair of Shoepee and show off your personal style.
          </p>
        </header>

        <div className="overflow-y-auto max-h-[500px] ">
          <div className="grid gap-6 mb-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/auth/productdetail" className="block group">
              <img
                src={''}
                alt={'rg'}
                className="h-full rounded-lg w-full object-cover object-center dark:bg-gray-500"
              />
              <div className="mt-1.5">
                <div className="text-lg text-orange-700 font-bold">
                  Customize
                </div>
                <div className="flex justify-between mt-3 text-sm">
                  <h3 className="text-gray-500 font-bold">iyl</h3>
                </div>
                <div className="flex justify-between mt-3 text-sm">
                  <h3 className="text-black font-bold group-hover:underline group-hover:underline-offset-4">
                    ili
                  </h3>
                  <p className="text-black text-md font-semibold">$</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
