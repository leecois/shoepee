import Breadcrumb from '../components/Breadcrumb';
import OrdersTable from '../components/OrdersTable';

const Orders = () => {
  return (
    <>
      <Breadcrumb pageName="Orders" />

      <div className="flex flex-col gap-10">
        <OrdersTable />
      </div>
    </>
  );
};

export default Orders;
