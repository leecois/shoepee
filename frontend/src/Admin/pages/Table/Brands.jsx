import AdminBrandData from '../../../hooks/AdminBrandData';
import BrandsListTable from '../../components/BrandsListTable';
import Breadcrumb from '../../components/Breadcrumb';

const Brands = () => {
  const { brandList, updateBrand } = AdminBrandData();
  return (
    <>
      <Breadcrumb pageName="Brands" />

      <div className="flex flex-col gap-10">
        <BrandsListTable brandList={brandList} updateBrand={updateBrand} />
      </div>
    </>
  );
};

export default Brands;
