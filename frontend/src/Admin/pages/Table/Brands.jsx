import AdminBrandData from '../../../hooks/AdminBrandData';
import BrandsListTable from '../../components/BrandsListTable';
import Breadcrumb from '../../components/Breadcrumb';

const Brands = () => {
  const { brandList, updateBrand, addBrand, deleteBrand } = AdminBrandData();
  return (
    <>
      <Breadcrumb pageName="Brands" />

      <div className="flex flex-col gap-10">
        <BrandsListTable
          brandList={brandList}
          updateBrand={updateBrand}
          addBrand={addBrand}
          deleteBrand={deleteBrand}
        />
      </div>
    </>
  );
};

export default Brands;
