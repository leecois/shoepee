import React from "react";

const Location = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-6xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
          DROP-OFF LOCATIONS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-4 bg-red-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-red-800 mb-4">
              HO CHI MINH, VIET NAM
            </h2>
            <p className="mb-2">
              <span className="font-semibold">Flagship Store</span>
            </p>
            <p className="mb-2">
              Lô E2a-7, Đường D1 Khu Công nghệ cao, P.Long Thạnh Mỹ, Q.9, TP.HCM
            </p>
            <p>Monday - Sunday</p>
            <p>9:00 AM - 21:00 PM</p>
            <p className="mt-4">
              <span className="font-semibold">Pop-up Store</span>
            </p>
            <p className="mb-2">
              Nguyễn Xiển – Phường Long Thạnh Mỹ – Quận 9 – TP Hồ Chí Minh
            </p>
            <p>Monday - Sunday</p>
            <p>9:00 AM - 21:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
