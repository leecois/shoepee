import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userApi from '../../../api/userApi';
import {
  addToCartAsync,
  getCartAsync,
} from '../../../containers/Cart/cartSlice';
import OrderDetailModal from './OrderDetailModal';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const OrderHistory = ({ orders, selectedTab, fetchOrders }) => {
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [orderToCancel, setOrderToCancel] = useState(null);
  const [paymentUrl, setPaymentUrl] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const gucciStyle = {
    dialogTitle: { color: '#a5a58d' }, // Olive green color, typical in GUCCI design
    dialogContent: { fontFamily: 'Times New Roman', fontStyle: 'italic' }, // Classic, elegant font
    button: { backgroundColor: '#6b705c', color: '#fff' }, // Dark green button with white text
  };

  const dispatch = useDispatch();
  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };
  const handleBuyAgain = async (canceledOrder) => {
    try {
      for (const item of canceledOrder.orderItem) {
        const cartItem = {
          shoeId: item.customizedShoeDto.id,
          size: item.size, // Assuming size is part of shoeModelDto
          quantity: item.productQuantity,
        };

        await dispatch(addToCartAsync(cartItem)).then((action) => {
          if (!action.error) {
            dispatch(getCartAsync());
            enqueueSnackbar('Added to Bag ', {
              variant: 'success',
            });
          } else {
            enqueueSnackbar('Something went wrong', {
              variant: 'error',
            });
          }
        });
      }
      dispatch(getCartAsync()); // Refresh the cart state
    } catch (error) {
      enqueueSnackbar('Something went wrong', {
        variant: 'error',
      });
    }
  };

  const filteredOrders = orders.filter((order) => {
    switch (selectedTab) {
      case 'ALL':
        return true;

      case 'To Pay':
        return (
          order.paymentStatus === 'NOT PAID' && order.orderStatus === 'PENDING'
        );

      case 'To Ship':
        // Hiển thị đơn hàng đã thanh toán hoặc là COD
        return order.orderStatus === 'CONFIRMED';

      case 'To Receive':
        return order.orderStatus === 'SHIPPING';

      case 'Delivered':
        return order.orderStatus === 'COMPLETED';

      case 'Cancelled':
        return order.orderStatus === 'CANCELLED';

      default:
        return false;
    }
  });

  const handlePaymentClick = async (orderId) => {
    try {
      const orderToPay = orders.find((order) => order.orderId === orderId);
      if (!orderToPay) {
        console.error('Order not found');
        return;
      }
      const response = await userApi.payOrder(orderToPay);
      setPaymentUrl(response);
      setOpenDialog(true);
    } catch (error) {
      console.error(error);
    }
  };

  const showCancelDialog = (orderId) => {
    setOrderToCancel(orderId);
    setCancelDialogOpen(true);
  };

  const confirmCancelOrder = async () => {
    if (orderToCancel) {
      try {
        const response = await userApi.cancelOrder(orderToCancel);
        console.log(response);
        setCancelDialogOpen(false);
        fetchOrders(); // Call fetchOrders after successfully cancelling the order
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };
  if (!orders || orders.length === 0) {
    return (
      <div className="min-h-[340px] flex flex-col justify-center items-center space-y-4 bg-gray-100">
        <p className="text-2xl font-bold text-gray-700">No orders yet</p>
      </div>
    );
  }
  function formatDate(date) {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    const hours = d.getHours().toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  return (
    <div className="overflow-x-auto bg-[#E5E5E5]">
      {filteredOrders.length === 0 ? (
        <div className="min-h-[340px] flex flex-col justify-center items-center space-y-4 bg-gray-100">
          <p className="text-2xl font-bold text-gray-700">No orders yet</p>
        </div>
      ) : (
        filteredOrders
          ?.slice()
          .reverse()
          .map((order) => (
            <div key={order.orderId} className="mb-4 p-2 bg-white shadow-lg">
              <div className="flex items-center justify-between pb-4 my-4 pt-4 border-b border-gray-300">
                <span className="text-sm font-medium text-gray-600">
                  {formatDate(order.orderCreateAt)}
                </span>

                <div className="space-x-2">
                  <div className="font-semibold btn btn-disabled mx-2">
                    Payment Method: {order.paymentMethod}
                  </div>
                  <div
                    className={`font-semibold ${
                      order.paymentStatus === 'PAID' ||
                      (order.paymentStatus === 'NOT PAID' &&
                        order.paymentMethod === 'COD')
                        ? 'btn btn-success no-animation text-white cursor-default'
                        : order.paymentStatus === 'NOT PAID'
                        ? 'btn btn-error no-animation text-white cursor-default'
                        : order.orderStatus === 'CANCELLED'
                        ? 'btn btn-error no-animation text-white cursor-default'
                        : ''
                    }`}
                  >
                    {order.orderStatus === 'PENDING' &&
                    order.paymentMethod === 'VNPAY' &&
                    order.paymentStatus === 'NOT PAID'
                      ? 'Awaiting Payment'
                      : order.orderStatus === 'PENDING' &&
                        order.paymentMethod === 'COD'
                      ? 'Awaiting Confirmation'
                      : order.orderStatus === 'CONFIRMED'
                      ? 'Preparing Order'
                      : order.orderStatus === 'SHIPPING'
                      ? 'Shipping'
                      : order.orderStatus === 'COMPLETED'
                      ? 'COMPLETED'
                      : 'CANCELLED'}
                  </div>
                </div>
              </div>
              <div
                onClick={() => handleOrderClick(order)}
                className="space-y-4 cursor-pointer"
              >
                {order.orderItem
                  ?.slice()
                  .sort((a, b) => a.orderItemId - b.orderItemId)
                  .map((product) => (
                    <div
                      key={product.orderItemId}
                      className="flex items-center justify-between p-4 bg-gray-100 rounded-lg"
                    >
                      <img
                        src={product.shoeDto?.imageUrl}
                        alt={product.shoeDto?.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="ml-4 flex-1">
                        <h5 className="text-lg font-semibold text-gray-800">
                          {product.shoeDto?.name}
                        </h5>
                        <p className="text-sm text-gray-500">
                          {product.variation}
                        </p>
                        <p className="text-sm font-medium text-gray-700">
                          Size: {product.size}
                        </p>
                        <p className="text-sm font-medium text-gray-700">
                          Quantity: {product.productQuantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-gray-700">
                          {product.totalProductprice.toLocaleString('de-DE')}{' '}
                          VND
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-300">
                <span className="text-lg font-semibold text-gray-600">
                  Order Total: {order.orderAmt.toLocaleString('de-DE')}
                </span>
                <div className="flex justify-between">
                  {order.paymentMethod === 'VNPAY' &&
                    order.paymentStatus === 'NOT PAID' &&
                    order.orderStatus === 'PENDING' && (
                      <button
                        className="btn btn-neutral mx-2"
                        onClick={() => handlePaymentClick(order.orderId)}
                      >
                        Pay Now
                      </button>
                    )}
                  {(order.paymentMethod === 'COD' ||
                    order.paymentMethod === 'VNPAY') &&
                    order.orderStatus === 'PENDING' && (
                      <button
                        className="btn btn-outline btn-error mx-2"
                        onClick={() => showCancelDialog(order.orderId)}
                      >
                        Cancel Order
                      </button>
                    )}
                  {(order.orderStatus === 'CANCELLED' ||
                    order.orderStatus === 'COMPLETED') && (
                    <button
                      className="btn btn-neutral mx-2"
                      onClick={() => handleBuyAgain(order)}
                    >
                      Buy Again
                    </button>
                  )}
                  <a href="/contact" className="btn btn-outline mx-2">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          ))
      )}
      <OrderDetailModal
        order={selectedOrder}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      {/* Payment Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle style={gucciStyle.dialogTitle}>
          {'Redirect to Payment'}
        </DialogTitle>
        <DialogContent style={gucciStyle.dialogContent}>
          <DialogContentText>
            You will be redirected to the payment page to complete your
            transaction.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            style={gucciStyle.button}
            onClick={() => setOpenDialog(false)}
          >
            Cancel
          </Button>
          <Button
            style={gucciStyle.button}
            onClick={() => (window.location.href = paymentUrl)}
            autoFocus
          >
            Proceed to Payment
          </Button>
        </DialogActions>
      </Dialog>
      {/* Dialog xác nhận hủy đơn hàng */}
      <Dialog
        open={cancelDialogOpen}
        onClose={() => setCancelDialogOpen(false)}
      >
        <DialogTitle style={gucciStyle.dialogTitle}>
          {'Cancel Order'}
        </DialogTitle>
        <DialogContent style={gucciStyle.dialogContent}>
          <DialogContentText>
            Are you sure you want to cancel this order?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            style={gucciStyle.button}
            onClick={() => setCancelDialogOpen(false)}
          >
            No
          </Button>
          <Button
            style={gucciStyle.button}
            onClick={confirmCancelOrder}
            autoFocus
          >
            Yes, Cancel Order
          </Button>
        </DialogActions>
      </Dialog>
      <OrderDetailModal
        order={selectedOrder}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default OrderHistory;
