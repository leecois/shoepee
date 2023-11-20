import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../containers/Cart/orderSlice';
import Breadcrumb from '../components/Breadcrumb';
import OrderHistory from '../components/Profile/OrderHistory';
import UserLayout from '../layout/UserLayout';

const PurchasePage = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.content);
  
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  
  const breadcrumbItems = [{ label: 'My Purchase' }];

  return (
    <UserLayout>
      <div className="flex-1 overflow-y-auto bg-[#F8F7F3] dark:bg-[#121212] p-8">
        <Breadcrumb items={breadcrumbItems} />
        <div className="max-w-4xl mx-auto">
          <section className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 mb-6 mt-4">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Purchase History
            </h1>
            <OrderHistory orders={orders} />
          </section>
        </div>
      </div>
    </UserLayout>
  );
};

export default PurchasePage;
