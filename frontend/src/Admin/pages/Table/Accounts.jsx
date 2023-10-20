import AccountsListTable from '../../components/AccountsListTable';
import Breadcrumb from '../../components/Breadcrumb';

const Accounts = () => {
  return (
    <>
      <Breadcrumb pageName="Accounts" />

      <div className="flex flex-col gap-10">
        <AccountsListTable />
      </div>
    </>
  );
};

export default Accounts;
