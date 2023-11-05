import AdminShoeData from '../../../hooks/AdminShoeData';
import Breadcrumb from '../../components/Breadcrumb';
import ShoeListTable from '../../components/ShoeListTable';

const Shoes = () => {
  const { shoeList } = AdminShoeData();
  return (
    <>
      <Breadcrumb pageName="Shoes" />

      <div className="flex flex-col gap-10">
        <ShoeListTable shoeList={shoeList} />
      </div>
    </>
  );
};

export default Shoes;
