import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

  useEffect(() => {
    setIsAccountDropdownOpen(location.pathname.includes('/user/account'));
  }, [location]);
  const user = JSON.parse(localStorage.getItem('user'));

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <aside className="hidden sm:flex flex-col justify-between h-screen w-64 bg-black text-white">
      <nav className="px-4 py-6">
        <ul className="space-y-4">
          <li className="group">
            <details
              open={isAccountDropdownOpen}
              className="group [&>summary]:list-none"
            >
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-3 hover:bg-yellow-500 hover:text-black">
                <span className="text-sm font-medium">Account</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <ul className="mt-1 space-y-2 pl-4">
                <li>
                  <Link
                    to="/user/account/profile"
                    className={`block rounded px-4 py-2 text-sm font-medium transition-colors
                      ${
                        isActive('/user/account/profile')
                          ? 'bg-yellow-500 text-black'
                          : 'hover:bg-yellow-500 hover:text-black'
                      }`}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/user/account/change-password"
                    className={`block rounded px-4 py-2 text-sm font-medium transition-colors
                      ${
                        isActive('/user/account/change-password')
                          ? 'bg-yellow-500 text-black'
                          : 'hover:bg-yellow-500 hover:text-black'
                      }`}
                  >
                    Change Password
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link
              to="/user/purchase"
              className={`block rounded-lg px-4 py-2 text-sm font-medium transition-colors
                ${
                  isActive('/user/purchase')
                    ? 'bg-yellow-500 text-black'
                    : 'hover:bg-yellow-500 hover:text-black'
                }`}
            >
              My Purchase
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sticky inset-x-0 bottom-0 border-t border-yellow-500 p-4">
        <div className="flex items-center gap-2">
          <img
            alt="Profile"
            src="/blank-avatar.png"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-xs">
              <span>{user.email}</span>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
