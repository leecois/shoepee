import ProductsListTable from '../../components/ProductsListTable';
import Breadcrumb from '../../components/Breadcrumb';
import useProductData from '../../../hooks/useProductData';

const Products = () => {
  const { productList } = useProductData();
  return (
    <>
      <Breadcrumb pageName="Products" />

      <div className="flex flex-col gap-10">
        <ProductsListTable data={productList} />
      </div>
    </>
  );
};

export default Products;
