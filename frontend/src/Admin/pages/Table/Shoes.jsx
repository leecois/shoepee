import ShoeListTable from '../../components/ShoeListTable';
import Breadcrumb from '../../components/Breadcrumb';
import useShoeData from '../../../hooks/useShoeData';

const Shoes = () => {
  const { shoeList } = useShoeData();
  return (
    <>
      <Breadcrumb pageName="Shoes" />

      <div className="flex flex-col gap-10">
        <ShoeListTable data={shoeList} />
      </div>
    </>
  );
};

export default Shoes;
