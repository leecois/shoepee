import React from "react";

const SectionModal = () => {
  return (
    <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3">
      <img
        alt="Trainer"
        src="https://cdn.shopify.com/s/files/1/0314/2300/4803/files/mens-shoes_280x605_01.jpg?v=1658498421"
        className="h-32 w-full object-cover md:h-full"
      />

      <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
        <p className="text-sm font-semibold uppercase tracking-widest">
          Shoepee
        </p>

        <h2 className="mt-6 font-black uppercase">
          <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
            New Order
          </span>

          <span className="mt-2 block text-sm">
            What brand is your item?
          </span>
        </h2>

        <a
          className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
          href="/"
        >
          NEXT
        </a>
      </div>
    </section>
  );
};

export default SectionModal;
