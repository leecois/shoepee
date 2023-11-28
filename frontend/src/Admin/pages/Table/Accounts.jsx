import useUserData from '../../../hooks/useUserData';
import AccountsListTable from '../../components/AccountsListTable';
import RegisterAdmin from '../../components/Auth/RegisterAdmin';
import RegisterStaff from '../../components/Auth/RegisterStaff';
import Breadcrumb from '../../components/Breadcrumb';

const Accounts = () => {
  const { userData, updateRole } = useUserData();
  return (
    <>
      <Breadcrumb pageName="Accounts" />

      <div className="flex flex-col gap-10">
        <AccountsListTable userData={userData} updateRole={updateRole} />
      </div>
      <div className="flex flex-col gap-10">
        <RegisterAdmin />
      </div>
      <div className="flex flex-col gap-10">
        <RegisterStaff />
      </div>
    </>
  );
};

export default Accounts;
