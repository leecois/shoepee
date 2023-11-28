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
import { enqueueSnackbar } from 'notistack';

const OrdersTable = ({
  orderList,
  acceptOrder,
  deliveryOrder,
  completeOrder,
}) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };
  const confirmOrder = (orderId) => {
    acceptOrder(orderId);
    enqueueSnackbar('Order confirmed successfully', { variant: 'success' });
  };
  const startShipping = (orderId) => {
    deliveryOrder(orderId);
    enqueueSnackbar('Shipping started successfully', { variant: 'success' });
  };
  const completedOrder = (orderId) => {
    completeOrder(orderId);
    enqueueSnackbar('Order completed successfully', { variant: 'success' });
  };
  const handleViewDetails = (order) => {
    // Find the full order data with 'orderItem' details from 'orderList'
    const fullOrderData = orderList.content.find((o) => o.orderId === order.id);

    // Set the selected order with all its details
    setSelectedOrder(fullOrderData);
    setIsModalOpen(true);
  };

  const columns = [
    { field: 'id', headerName: 'Order ID', width: 70 },
    {
      field: 'orderAmt',
      headerName: 'Total in VND',
      type: 'number',
      width: 130,
    },
    { field: 'fullName', headerName: 'Full Name', width: 130 },
    { field: 'phone', headerName: 'Phone', width: 130 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'paymentMethod', headerName: 'Payment Method', width: 120 },
    { field: 'orderStatus', headerName: 'Order Status', width: 130 },
    { field: 'orderCreateAt', headerName: 'Created At', width: 180 },
    { field: 'orderCompeledAt', headerName: 'Completed At', width: 180 },

    {
      field: 'actions',
      headerName: 'Actions',
      filterable: false,
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <div className="flex items-center space-x-2">
          {params.row.orderStatus === 'PENDING' && (
            <button
              onClick={() => confirmOrder(params.row.id)}
              title="Confirm Order"
            >
              <CheckIcon className="h-5 w-5 text-green-500" />
            </button>
          )}
          {params.row.orderStatus === 'CONFIRMED' && (
            <button
              onClick={() => startShipping(params.row.id)}
              title="Start Shipping"
            >
              <TruckIcon className="h-5 w-5 text-blue-500" />
            </button>
          )}
          {params.row.orderStatus === 'SHIPPING' && (
            <button
              onClick={() => completedOrder(params.row.id)}
              title="Complete Order"
            >
              <CheckBadgeIcon className="h-5 w-5 text-purple-500" />
            </button>
          )}
          <button
            onClick={() => handleViewDetails(params.row)}
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
      ? orderList.content
          .filter(
            (order) =>
              !(
                (order.paymentMethod === 'VNPAY' &&
                  order.paymentStatus === 'NOT PAID') ||
                order.orderStatus === 'CANCELLED'
              )
          )
          .map((order) => ({
            id: order.orderId,
            phone: order.phoneNumber || 'N/A',
            fullName: order.fullName || 'N/A',
            address: order.billingAddress || 'N/A',
            paymentMethod: order.paymentMethod,
            orderStatus: order.orderStatus,
            orderCreateAt: new Date(order.orderCreateAt).toLocaleString(),
            orderCompeledAt: order.orderCompeledAt
              ? new Date(order.orderCompeledAt).toLocaleString()
              : 'N/A',
            orderAmt: order.orderAmt,
            status: order.status,
            actions: '',
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
