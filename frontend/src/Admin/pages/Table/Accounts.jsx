import useUserData from '../../../hooks/useUserData';
import AccountsListTable from '../../components/AccountsListTable';
import Breadcrumb from '../../components/Breadcrumb';

const Accounts = () => {
  const { userData, updateRole } = useUserData();
  return (
    <>
      <Breadcrumb pageName="Accounts" />

      <div className="flex flex-col gap-10">
        <AccountsListTable userData={userData} updateRole={updateRole} />
      </div>
    </>
  );
};

export default Accounts;
