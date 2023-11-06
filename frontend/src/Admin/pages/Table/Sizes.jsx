import useSizeData from '../../../hooks/useSizeData';
import Breadcrumb from '../../components/Breadcrumb';
import SizesListTable from '../../components/SizesListTable';

const Sizes = () => {
  const { sizeList } = useSizeData();
  return (
    <>
      <Breadcrumb pageName="Sizes" />

      <div className="flex flex-col gap-10">
        <SizesListTable sizeList={sizeList} />
      </div>
    </>
  );
};

export default Sizes;
