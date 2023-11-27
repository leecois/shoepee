import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center bottom-0 p-10 bg-black-2 text-white ">
        <nav className="grid grid-flow-col gap-4">
          <a href="/products" className="link link-hover">
            Shop
          </a>
          <a href="/location" className="link link-hover">
            Find a store
          </a>
          <Link to="user/purchase" className="link link-hover">
            Your order
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <div className=" grid grid-flow-col gap-4">
            <a href='https://www.facebook.com/shoepeefpt'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>&copy; 2023 Shoepee, Inc. All Rights Reserved</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
