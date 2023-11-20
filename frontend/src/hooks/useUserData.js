import { useEffect, useState } from 'react';
import userApi from '../api/userApi';

const useUserData = () => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userApi.getAll();

        setUserData(response);
      } catch (error) {
        setError('Error fetching user data: ' + error);
      }
    };

    fetchData();
  }, []);
  const updateRole = async (id, updatedData) => {
    try {
      const updateRole = await userApi.update(id, updatedData);
      const updateRoleList = userData.map((user) =>
        user.id === id ? updateRole : user
      );
      setUserData(updateRoleList);
    } catch (error) {
      console.error('Error updating role: ' + error.message);
    }
  };

  return { userData, error, updateRole };
};

export default useUserData;
