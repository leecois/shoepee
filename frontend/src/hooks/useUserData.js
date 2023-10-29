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
        console.log(response);
      } catch (error) {
        setError('Error fetching user data: ' + error);
      }
    };

    fetchData();
  }, []);

  return { userData, error };
};

export default useUserData;
