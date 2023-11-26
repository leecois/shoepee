import React, { useEffect, useState } from 'react';
import useUserInfoData from '../../../hooks/useUserInfoData';
import { useAlert } from '../Alert/AlertContext';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.userId;
  const { userData, updateUserInfo } = useUserInfoData(userId);
  const [email, setEmail] = useState('');
  const [fullname, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const { showAlert } = useAlert();
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    if (userData) {
      setFullName(userData.fullname || '');
      setPhone(userData.phone || '');
      setAddress(userData.address || '');
      const user = JSON.parse(localStorage.getItem('user'));
      setEmail(user?.email || '');
    }
  }, [userData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateUserInfo({ fullname, phone, address });
    showAlert('Profile updated', 'success');
  };
  return (
    <div className="grid m-8 grid-cols-3 gap-8">
      <div className="col-span-5 xl:col-span-3">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Personal Information
            </h3>
          </div>

          <div className="p-7">
            <form action="#" onSubmit={handleSubmit}>
              <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <div className="my-5 mr-5 relative overflow-hidden">
                    <label
                      htmlFor="fullname"
                      className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                        focused === 3
                          ? 'from-gray-800 to-gray-400'
                          : 'from-gray-600 to-gray-600'
                      }`}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      placeholder=""
                      value={fullname}
                      onChange={(e) => setFullName(e.target.value)}
                      className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
                      onFocus={() => setFocused(3)}
                      onBlur={() => setFocused(null)}
                    />
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gray-800 to-gray-400 transition-all duration-300 ease-in transform ${
                        focused === 3 ? 'w-full' : 'w-0'
                      }`}
                      aria-hidden="true"
                    />
                    {/* right side */}
                  </div>
                </div>
                <div className="my-5 mr-5 relative overflow-hidden">
                  <label
                    htmlFor="phone"
                    className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                      focused === 3
                        ? 'from-gray-800 to-gray-400'
                        : 'from-gray-600 to-gray-600'
                    }`}
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+84 "
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
                    onFocus={() => setFocused(3)}
                    onBlur={() => setFocused(null)}
                  />
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gray-800 to-gray-400 transition-all duration-300 ease-in transform ${
                      focused === 3 ? 'w-full' : 'w-0'
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="my-5 mr-5 relative overflow-hidden">
                <label
                  htmlFor="address"
                  className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                    focused === 3
                      ? 'from-gray-800 to-gray-400'
                      : 'from-gray-600 to-gray-600'
                  }`}
                >
                  Address
                </label>
                <div className="relative">
                  <span className="absolute left-4.5 top-4"></span>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Ho Chi Minh"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
                    onFocus={() => setFocused(3)}
                    onBlur={() => setFocused(null)}
                  />
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gray-800 to-gray-400 transition-all duration-300 ease-in transform ${
                      focused === 3 ? 'w-full' : 'w-0'
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="my-5 mr-5 relative overflow-hidden">
                <label
                  htmlFor="email"
                  className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${
                    focused === 3
                      ? 'from-gray-800 to-gray-400'
                      : 'from-gray-600 to-gray-600'
                  }`}
                >
                  Email
                </label>
                <div className="relative">
                  <span className="absolute left-4.5 top-4"></span>
                  <input
                    disabled
                    placeholder="@gmail.com"
                    value={email}
                    className="form-input w-full border-0 border-b-2 border-gray-300 bg-white bg-opacity-80 placeholder-gray-400 focus:border-gray-300 focus:ring-0"
                    onFocus={() => setFocused(3)}
                    onBlur={() => setFocused(null)}
                  />

                </div>
              </div>

              <div className="flex justify-end gap-4.5">
                <button type="submit" className="btn btn-outline btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
