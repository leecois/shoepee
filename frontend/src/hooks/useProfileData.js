import { useEffect, useState } from 'react';
import userApi from '../api/userApi';

const useProfileData = (userId) => {
  const [profileData, setProfileData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userApi.getById(userId);

        setProfileData(response);
        console.log(response);
      } catch (error) {
        setError('Error fetching user data: ' + error);
      }
    };

    fetchData();
  }, [userId]);

  return { profileData, error };
};

export default useProfileData;
