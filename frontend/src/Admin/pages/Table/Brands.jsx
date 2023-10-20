import BrandsListTable from '../../components/BrandsListTable';
import Breadcrumb from '../../components/Breadcrumb';

const Brands = () => {
  return (
    <>
      <Breadcrumb pageName="Brands" />

      <div className="flex flex-col gap-10">
        <BrandsListTable />
      </div>
    </>
  );
};

export default Brands;
