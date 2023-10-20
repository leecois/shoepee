import ProductsListTable from '../../components/ProductsListTable';
import Breadcrumb from '../../components/Breadcrumb';

const Products = () => {
  return (
    <>
      <Breadcrumb pageName="Products" />

      <div className="flex flex-col gap-10">
        <ProductsListTable />
      </div>
    </>
  );
};

export default Products;
