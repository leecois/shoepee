import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOrders } from '../../../containers/Cart/orderSlice';
import useProfileData from '../../../hooks/useProfileData';
import Breadcrumb from '../../components/Breadcrumb';
import Profile from '../../components/Profile/Profile';
import UserLayout from '../../layout/UserLayout';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const profileData = useProfileData(userId);

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
        <Breadcrumb items={[{ label: 'Profile' }]} />
        <div className="max-w-4xl mx-auto">
          {/* Profile component container */}
          <section className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
              My Profile
            </h1>
            {/* Render Profile with passed data */}
            <Profile profileData={profileData} />
          </section>

          {/* Assuming OrderHistory would be added here if needed */}
        </div>
      </div>
    </UserLayout>
  );
};

export default ProfilePage;
