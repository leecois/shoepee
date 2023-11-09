import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Profile from '../components/Profile/Profile';
import OrderHistory from '../components/Profile/OrderHistory';
import useProfileData from '../../hooks/useProfileData';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const breadcrumbItems = [{ label: 'Profile' }];
  const { userId } = useParams();
  const profileData = useProfileData(userId);
  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <div>
        <Profile profileData={profileData} />
      </div>
      <div className="m-8">
        <OrderHistory />
      </div>
    </div>
  );
};

export default ProfilePage;
