import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ChangePassword from '../../../Authentication/ChangePassword';
import { fetchOrders } from '../../../containers/Cart/orderSlice';
import Breadcrumb from '../../components/Breadcrumb';
import UserLayout from '../../layout/UserLayout';

const ChangePasswordPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <UserLayout>
      {/* Assuming UserLayout already contains the Sidebar */}
      <div className="flex-1 overflow-y-auto bg-[#F8F7F3] dark:bg-[#121212] p-8">
        <Breadcrumb items={[{ label: 'Change Password' }]} />
        <div className="max-w-4xl mx-auto">
          {/* Profile component container */}
          <section className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Change Password
            </h1>
            {/* Render Profile with passed data */}
            <ChangePassword />
          </section>
        </div>
      </div>
    </UserLayout>
  );
};

export default ChangePasswordPage;
