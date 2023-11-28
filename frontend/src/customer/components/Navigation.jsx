import { UserCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AuthModal from '../../Authentication/AuthModal';
import StorageKeys from '../../constants/storage-keys';
import { clearUserData } from '../../containers/User/userSlice';
import {
  cartItemsCountSelector,
  cartTotalSelector,
} from '../../containers/selectors';
import { enqueueSnackbar } from 'notistack';

export default function Navigation() {
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const cartTotal = useSelector(cartTotalSelector);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate('/cart');
  };
  const handleHomeClick = () => {
    navigate('/');
  };

  // Retrieve user information from localStorage if authenticated
  let user = null;
  let isManager = false;
  let isAdmin = false;
  if (isAuthenticated) {
    user = JSON.parse(localStorage.getItem(StorageKeys.USER));
    isManager = user.authorities.some((auth) => auth.authority === 'MANAGER');
    isAdmin = user.authorities.some((auth) => auth.authority === 'ADMIN');
  }

  const userId = user ? user.userId : null;

  const [openAuthModal, setOpenAuthModal] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Function to open the sign-in modal
  const handleClickOpen = () => {
    setOpenAuthModal(true);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    enqueueSnackbar('Logout Success', {
      variant: 'success',
    });
    dispatch(clearUserData());
    window.location.href = '/';
  };

  // Function to close the sign-in modal
  const handleClose = () => {
    setOpenAuthModal(false);
  };

  // Function to handle scroll events
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <nav
        className={`navbar bg-neutral-100 sticky top-0 z-50 transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0 -translate-y-full'
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown dropdown-hover">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={handleHomeClick}>Home</button>
              </li>
              <li>
                <Link to="/products">Shop</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <button
            onClick={handleHomeClick}
            className="btn btn-ghost normal-case text-xl font-bold text-gray-800 group relative inline-block mr-5 p-2.5 outline-none no-underline bg-gradient-to-br from-yellow-500 to-red-500 bg-clip-text tracking-wide focus:outline-none transition-all duration-300 transform hover:from-gray-700 hover:to-gray-700"
          >
            <span
              className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-br from-purple-500 to-red-500 opacity-0 transition-all duration-300 transform -translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0"
              aria-hidden="true"
            />
            SHOEPEE
            <span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-br from-purple-500 to-red-500 opacity-0 transition-all duration-300 transform translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-4 flex-none">
          {/* Authenticate */}
          {isAuthenticated ? (
            <div className="dropdown dropdown-hover dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost justify-center btn-circle avatar"
              >
                <div className="indicator">
                  <img
                    src="/blank-avatar.png"
                    alt="User"
                    className="rounded-full h-7 w-7"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {/* Additional Navbar Item for Managers */}
                {isAuthenticated && isManager && (
                  <Link to="/staff" className="btn btn-ghost">
                    Manager Orders
                  </Link>
                )}
                {isAuthenticated && isAdmin && (
                  <Link to="/admin" className="btn btn-ghost">
                    My Shop
                  </Link>
                )}
                <li>
                  <Link to={`user/account/profile`} className="justify-between">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link to={`user/purchase`} className="justify-between">
                    My Purchase
                  </Link>
                </li>

                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle"
                onClick={handleClickOpen}
              >
                Sign in
              </label>
            </div>
          )}
          {/* CART */}
          <div className="dropdown dropdown-hover dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm text-red-500 indicator-item">
                  {cartItemsCount}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="p-2 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow-lg"
            >
              <div className="card-body">
                <span className="font-bold text-lg text-black block mb-2">
                  {cartItemsCount} Items
                </span>
                <span className="font-medium text-gray-700 block mb-4">
                  Subtotal: {cartTotal}
                </span>
                <div className="card-actions pt-2 border-t border-gray-200 ">
                  <button
                    className="btn btn-primary btn-block text-white bg-black border border-black py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
                    onClick={handleCartClick}
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <img src="/assets/clp-hero-top.webp" alt="Colorful" />
      {openAuthModal && (
        <div className="modal active">
          <div className="modal-overlay"></div>
          <div className="modal-container">
            <div className="modal-header">
              <button
                className="btn btn-clear float-right"
                onClick={handleClickOpen}
              ></button>
              <div className="modal-title h5">Sign in</div>
            </div>
            <div className="modal-body">
              <p>Sign in form goes here.</p>
            </div>
            <div className="modal-footer">
              <button className="btn" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
          <AuthModal
            handleClickOpen={openAuthModal}
            handleClose={handleClose}
          />
        </div>
      )}
    </>
  );
}
