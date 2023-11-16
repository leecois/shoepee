import React from 'react';
import OrdersTable from '../../Admin/components/OrdersTable';
import useOrderData from '../../hooks/useOrderData';
import Breadcrumb from '../components/Breadcrumb';

const StaffPage = () => {
  const breadcrumbItems = [{ label: 'Manager Order' }];
  const orderList = useOrderData();
  return (
    <div className="min-h-screen">
      <Breadcrumb items={breadcrumbItems} />
      <OrdersTable orderList={orderList} />
    </div>
  );
};

export default StaffPage;
