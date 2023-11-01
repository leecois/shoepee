import Breadcrumb from '../../components/Breadcrumb';
import ModelsTable from '../../components/ModelsTable';

const Styles = () => {
  return (
    <>
      <Breadcrumb pageName="Styles" />

      <div className="flex flex-col gap-10">
        <ModelsTable />
      </div>
    </>
  );
};

export default Styles;
