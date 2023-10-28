import ShoeListTable from '../../components/ShoeListTable';
import Breadcrumb from '../../components/Breadcrumb';
import useProductData from '../../../hooks/useProductData';

const Shoes = () => {
  const { shoeList } = useProductData();
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
