import useOrderData from '../../hooks/useOrderData';
import Breadcrumb from '../components/Breadcrumb';
import OrdersTable from '../components/OrdersTable';

const Orders = () => {
  const orderList = useOrderData();
  return (
    <>
      <Breadcrumb pageName="Orders" />

      <div className="flex flex-col gap-10">
        <OrdersTable orderList={orderList} />
      </div>
    </>
  );
};

export default Orders;
