import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../containers/Cart/orderSlice';
import Breadcrumb from '../components/Breadcrumb';
import OrderHistory from '../components/Profile/OrderHistory';
import UserLayout from '../layout/UserLayout';
import Tabs from './ProductPage/Tabs';
import { getCartAsync } from '../../containers/Cart/cartSlice';

const PurchasePage = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.content);
  const [selectedTab, setSelectedTab] = useState('ALL'); // State to track the selected tab

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(getCartAsync());
  }, [dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [{ label: 'My Purchase' }];

  // Callback function to handle tab changes
  const handleTabChange = (tabName) => {
    setSelectedTab(tabName); // Update the selected tab in the parent component
  };

  return (
    <UserLayout>
      <div className="flex-1 overflow-y-auto bg-[#F8F7F3] dark:bg-[#121212] p-8">
        <Breadcrumb items={breadcrumbItems} />
        <div className="max-w-5xl mt-4 mx-auto">
          <Tabs onTabChange={handleTabChange} />{' '}
          {/* Pass the handleTabChange callback */}
          <section className="bg-white min-w-fit dark:bg-gray-800 shadow-xl rounded-md p-6 mb-6 mt-4">
            <OrderHistory
              orders={orders}
              fetchOrders={() => dispatch(fetchOrders())}
              selectedTab={selectedTab}
            />
            {/* Pass selectedTab to OrderHistory */}
          </section>
        </div>
      </div>
    </UserLayout>
  );
};

export default PurchasePage;
