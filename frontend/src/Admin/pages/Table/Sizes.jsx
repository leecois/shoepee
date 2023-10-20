import Breadcrumb from '../../components/Breadcrumb';
import SizesListTable from '../../components/SizesListTable';

const Sizes = () => {
  return (
    <>
      <Breadcrumb pageName="Sizes" />

      <div className="flex flex-col gap-10">
        <SizesListTable />
      </div>
    </>
  );
};

export default Sizes;
