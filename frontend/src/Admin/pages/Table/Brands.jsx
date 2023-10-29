import AdminBrandData from '../../../hooks/AdminBrandData';
import BrandsListTable from '../../components/BrandsListTable';
import Breadcrumb from '../../components/Breadcrumb';

const Brands = () => {
  const brandData = AdminBrandData();
  return (
    <>
      <Breadcrumb pageName="Brands" />

      <div className="flex flex-col gap-10">
        <BrandsListTable brandData={brandData} />
      </div>
    </>
  );
};

export default Brands;
