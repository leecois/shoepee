import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="fullname"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <span className="absolute left-4.5 top-4"></span>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus-border-primary"
                      type="text"
                      name="fullname"
                      id="fullname"
                      placeholder=""
                      value={fullname}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus-border-primary"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+84 "
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-5.5">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="address"
                >
                  Address
                </label>
                <div className="relative">
                  <span className="absolute left-4.5 top-4"></span>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus-border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus-border-primary"
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Ho Chi Minh"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-5.5">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="emailAddress"
                >
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-4.5 top-4"></span>
                  <input
                    className="w-full rounded input input-bordered border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black-2 focus-border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus-border-primary"
                    disabled
                    placeholder="@gmail.com"
                    value={email}
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
