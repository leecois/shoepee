import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Profile from '../components/Profile/Profile';
import OrderHistory from '../components/Profile/OrderHistory';
import useProfileData from '../../hooks/useProfileData';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchOrders } from '../../containers/Cart/orderSlice';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.content);
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  const breadcrumbItems = [{ label: 'Profile' }];
  const { userId } = useParams();
  const profileData = useProfileData(userId);
  return (
    <div className="min-h-screen">
      <Breadcrumb items={breadcrumbItems} />
      <div>
        <Profile profileData={profileData} />
      </div>
      <div className="">
        <OrderHistory orders={orders} />
      </div>
    </div>
  );
};

export default ProfilePage;
