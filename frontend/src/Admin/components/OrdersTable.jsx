import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  CheckIcon,
  EyeIcon,
  TruckIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';
import OrderDetailModal from '../../customer/components/Profile/OrderDetailModal';
import Box from '@mui/material/Box';

const OrdersTable = ({
  orderList,
  acceptOrder,
  deliveryOrder,
  completeOrder,
}) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(orderList);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };
  const confirmOrder = (orderId) => {
    acceptOrder(orderId);
  };
  const startShipping = (orderId) => {
    deliveryOrder(orderId);
  };
  const completedOrder = (orderId) => {
    completeOrder(orderId);
  };

  const columns = [
    { field: 'orderId', headerName: 'Order ID', width: 150 },
    { field: 'phone', headerName: 'Phone', width: 130 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'paymentStatus', headerName: 'Payment Status', width: 120 },
    { field: 'orderStatus', headerName: 'Order Status', width: 130 },
    { field: 'orderCreateAt', headerName: 'Created At', width: 180 },
    {
      field: 'orderAmt',
      headerName: 'Total in USD',
      type: 'number',
      width: 130,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <div className="flex items-center space-x-2">
          {params.row.orderStatus === 'PENDING' && (
            <button
              onClick={() => confirmOrder(params.row.orderId)}
              title="Confirm Order"
            >
              <CheckIcon className="h-5 w-5 text-green-500" />
            </button>
          )}
          {params.row.orderStatus === 'CONFIRMED' && (
            <button
              onClick={() => startShipping(params.row.orderId)}
              title="Start Shipping"
            >
              <TruckIcon className="h-5 w-5 text-blue-500" />
            </button>
          )}
          {params.row.orderStatus === 'SHIPPING' && (
            <button
              onClick={() => completedOrder(params.row.orderId)}
              title="Complete Order"
            >
              <CheckBadgeIcon className="h-5 w-5 text-purple-500" />
            </button>
          )}
          <button
            onClick={() => setSelectedOrder(params.row)}
            title="View Details"
          >
            <EyeIcon className="h-5 w-5" />
          </button>
        </div>
      ),
    },
  ];

  const rows =
    orderList && Array.isArray(orderList.content)
      ? orderList.content.map((order) => ({
          id: order.orderId,
          orderId: `${order.orderId}`,
          phone: order.phoneNumber || 'N/A',
          address: order.billingAddress || 'N/A',
          paymentStatus: order.paymentStatus,
          orderStatus: order.orderStatus,
          orderCreateAt: new Date(order.orderCreateAt).toLocaleString(),
          orderAmt: order.orderAmt,
          status: order.status, // Add this line
          actions: '', // Actions are rendered in the renderCell function
        }))
      : [];

  return (
    <Box
      className="dark:bg-boxdark-2 p-4" // Adjusted for a darker gray in dark mode and padding for the box
      sx={{
        height: 700,
        width: '100%',
        '& .MuiDataGrid-root': {
          borderColor: 'transparent', // Removes default border
        },
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: 'black', // GUCCI often uses black in their designs
          color: 'white',
          fontFamily: 'sans-serif', // A font that could fit the luxurious theme
        },
        '& .MuiDataGrid-cell': {
          fontFamily: 'sans-serif', // Consistent font for the cells
          '&.dark:text-white': {
            color: 'white !important', // Ensures text color is white in dark mode
          },
        },
        '& .MuiDataGrid-cell:focus': {
          outline: 'none', // Remove the focus outline
        },
        '& .MuiDataGrid-columnSeparator': {
          display: 'none', // Hiding column separators for a cleaner look
        },
        '& .MuiDataGrid-menuIcon': {
          color: 'white', // Making sure all icons are visible in dark mode
        },
        '& .MuiDataGrid-toolbar': {
          color: 'white',
        },
        '& .MuiTablePagination-root': {
          color: 'gray', // or any color you want
        },
        '& .MuiIconButton-root': {
          color: 'white',
        },
        // Add any additional styling here
      }}
    >
      <DataGrid
        className="dark:text-white"
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <OrderDetailModal
        order={selectedOrder}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Box>
  );
};

export default OrdersTable;
