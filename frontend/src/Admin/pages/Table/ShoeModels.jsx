import AdminModelData from '../../../hooks/AdminModelData';
import Breadcrumb from '../../components/Breadcrumb';
import ModelsTable from '../../components/ModelsTable';

const Styles = () => {
  const {modelList} = AdminModelData();
  return (
    <>
      <Breadcrumb pageName="Models" />

      <div className="flex flex-col gap-10">
        <ModelsTable modelList={modelList}/>
      </div>
    </>
  );
};

export default Styles;
