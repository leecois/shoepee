import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { CheckIcon, EyeIcon } from '@heroicons/react/24/outline';
import OrderDetailModal from '../../customer/components/Profile/OrderDetailModal';

const OrdersTable = ({ orderList, acceptOrder }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const handleProductClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const columns = [
    { field: 'orderId', headerName: 'Order ID', width: 150 },
    { field: 'phone', headerName: 'Phone', width: 130 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'paymentStatus', headerName: 'Payment Status', width: 120 },
    { field: 'orderStatus', headerName: 'Order Status', width: 130 },
    { field: 'orderCreateAt', headerName: 'Created At', width: 180 },
    { field: 'orderAmt', headerName: 'Total in USD', type: 'number', width: 130 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleProductClick(params.row)}
            className="hover:text-info mr-3"
          >
            <EyeIcon className="h-5 w-5" />
          </button>
          {params.row.status === false && (
            <button
              className="hover:text-success"
              onClick={() => acceptOrder(params.row.orderId)}
            >
              <CheckIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      ),
    },
  ];

  const rows =
    orderList && Array.isArray(orderList.content)
      ? orderList.content.map((order) => ({
          id: order.orderId,
          orderId: `${order.orderId}`,
          phone: order.user.phone || 'N/A',
          address: order.billingAddress || 'N/A',
          paymentStatus: order.paymentStatus,
          orderStatus: order.status ? 'ACCEPT' : 'PENDING',
          orderCreateAt: new Date(order.orderCreateAt).toLocaleString(),
          orderAmt: '$' + order.orderAmt,
          status: order.status, // Add this line
          actions: '', // Actions are rendered in the renderCell function
        }))
      : [];

  return (
    <div className="rounded-sm border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          sx={{
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: 'whitesmoke',
              color: 'black',
            },
            '& .MuiDataGrid-cell': {
              
            },
          }}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
      <OrderDetailModal
        order={selectedOrder}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default OrdersTable;
