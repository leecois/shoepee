import AdminShoeData from '../../../hooks/AdminShoeData';
import Breadcrumb from '../../components/Breadcrumb';
import ShoeListTable from '../../components/ShoeListTable';

const Shoes = () => {
  const { shoeList, deleteShoe, updateShoe } = AdminShoeData();
  return (
    <>
      <Breadcrumb pageName="Shoes" />

      <div className="flex flex-col gap-10">
        <ShoeListTable shoeList={shoeList} deleteShoe={deleteShoe} updateShoe={updateShoe} />
      </div>
    </>
  );
};

export default Shoes;
