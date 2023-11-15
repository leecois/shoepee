import Breadcrumb from '../components/Breadcrumb';
import ChartView from '../components/ChartView';
import ChartRevenue from '../components/ChartRevenue';

const Chart = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        {/* <ChartView /> */}
        <ChartRevenue />
      </div>
    </>
  );
};

export default Chart;
