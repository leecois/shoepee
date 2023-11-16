import { useEffect, useState } from 'react';
import userApi from '../api/userApi';

const useUserInfoData = (userId) => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userApi.getUserInfo(userId);
        setUserData(response);
      } catch (error) {
        setError('Error fetching user data: ' + error);
      }
    };

    fetchData();
  }, [userId]);

  const updateUserInfo = async (newUserData) => {
    try {
      await userApi.addUserInfo(userId, newUserData);
      setUserData(newUserData);
    } catch (error) {
      setError('Error updating user data: ' + error);
    }
  };

  return { userData, error, updateUserInfo };
};

export default useUserInfoData;
