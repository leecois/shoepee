import React from 'react';
import OrdersTable from '../../Admin/components/OrdersTable';
import StaffOrderData from '../../hooks/StaffOrderData';
import Breadcrumb from '../components/Breadcrumb';

const StaffPage = () => {
  const breadcrumbItems = [{ label: 'Manager Order' }];
  const orderList = StaffOrderData();
  return (
    <div className="min-h-screen">
      <Breadcrumb items={breadcrumbItems} />
      <OrdersTable orderList={orderList} />
    </div>
  );
};

export default StaffPage;
