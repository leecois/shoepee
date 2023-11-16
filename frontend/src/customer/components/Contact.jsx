import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);
  return (
    <div className="relative min-h-screen bg-white">
      <div className="container mx-auto py-16 px-6 md:px-12 lg:px-20">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
          <span className="absolute inset-0 bg-gray-100 opacity-5"></span>
          <span className="absolute top-0 left-0 w-1/2 h-full bg-gray-200 opacity-10"></span>
        </div>

        {/* Main Container */}
        <div className="relative bg-white shadow-xl rounded-lg p-8 md:p-16">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center">
            Contact Us
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-gray-600 text-center text-base md:text-lg">
            We're here to help you with your queries and concerns.
          </p>

          {/* Contact Details */}
          <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
            {/* Address */}
            <div className="flex items-center">
              <QuestionMarkCircleIcon className="w-8 h-8 text-red-600" />
              <p className="ml-3 text-gray-700 font-medium">
                Lô E2a-7, Đường D1 Khu Công nghệ cao, P.Long Thạnh Mỹ, Q.9,
                TP.HCM
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <DevicePhoneMobileIcon className="w-8 h-8 text-red-600" />
              <p className="ml-3 text-gray-700 font-medium">357-233-9644</p>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <EnvelopeIcon className="w-8 h-8 text-red-600" />
              <p className="ml-3 text-gray-700 font-medium">
                shoepee@gmail.com
              </p>
            </div>
          </div>
          {/* Facebook Page Plugin */}
          <div className="mt-10 flex justify-center">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fshoepeefpt&width=500&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
              width="500"
              height="170"
              style={{ border: 'none', overflow: 'hidden' }}
              frameborder="0"
              allowTransparency="true"
              allow="encrypted-media"
              title="Shoepee"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
