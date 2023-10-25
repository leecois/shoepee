import ProductsListTable from '../../components/ProductsListTable';
import Breadcrumb from '../../components/Breadcrumb';
import useProductData from '../../../hooks/useProductData';

const Products = () => {
  const { product } = useProductData();
  return (
    <>
      <Breadcrumb pageName="Products" />

      <div className="flex flex-col gap-10">
        <ProductsListTable data={product} />
      </div>
    </>
  );
};

export default Products;
