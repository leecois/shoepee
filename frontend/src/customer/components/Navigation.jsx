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
  if (isAuthenticated) {
    user = JSON.parse(localStorage.getItem(StorageKeys.USER));
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
    dispatch(clearUserData());
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
      <div
        className={`navbar bg-base-200 sticky top-0 z-99999 transition-all duration-300 ${
          visible ? 'opacity-100' : 'opacity-0 -translate-y-full'
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={handleHomeClick}>Home</button>
              </li>
              <li>
                <a href="/products">Shop</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <button
            onClick={handleHomeClick}
            className="btn btn-ghost font-bold normal-case text-xl"
          >
            SHOEPEE
          </button>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-4 flex-none">
          {/* Authenticate */}
          {isAuthenticated ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost justify-center btn-circle avatar"
              >
                <div className="indicator">
                  <UserCircleIcon className="h-7 w-7" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={`profile/${userId}`} className="justify-between">
                    Profile
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
          <div className="dropdown dropdown-end">
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
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">
                  {cartItemsCount} Items
                </span>
                <span className="text-info">Subtotal: {cartTotal}</span>
                <div className="card-actions">
                  <button
                    className="btn btn-primary btn-block"
                    onClick={handleCartClick}
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
