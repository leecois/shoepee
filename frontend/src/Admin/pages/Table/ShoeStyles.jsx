import Breadcrumb from '../../components/Breadcrumb';
import StylesTable from '../../components/StylesTable';

const Styles = () => {
  return (
    <>
      <Breadcrumb pageName="Styles" />

      <div className="flex flex-col gap-10">
        <StylesTable />
      </div>
    </>
  );
};

export default Styles;
