import AdminShoeData from '../../../hooks/AdminShoeData';
import useOrderData from '../../../hooks/useOrderData';
import useUserData from '../../../hooks/useUserData';
import CardFour from '../../components/CardFour';
import CardThree from '../../components/CardThree';
import CardTwo from '../../components/CardTwo';
import ChartRevenue from '../../components/ChartRevenue';

const Dashboard = () => {
  const { orderList } = useOrderData();
  const { userData } = useUserData();
  const { shoeList } = AdminShoeData();
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
        {/* <CardTwo profit={orderList} /> */}
        <CardThree shoeList={shoeList} />
        <CardFour userData={userData} />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartRevenue orderList={orderList.content} />
        {/* <Feedback /> */}
      </div>
    </>
  );
};

export default Dashboard;
