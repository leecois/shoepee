import StorageKeys from '../constants/storage-keys';

const getCurrentUserRole = () => {
  // Retrieve the user data from localStorage
  const userString = localStorage.getItem(StorageKeys.USER);

  // Check if the user data exists
  if (userString) {
    const user = JSON.parse(userString);

    // Check if the authorities field exists and is an array
    if (user.authorities && Array.isArray(user.authorities)) {
      // Return an array of roles
      return user.authorities.map((auth) => auth.authority);
    }
  }

  // Return an empty array or a default value if no roles are found
  return [];
};

export default getCurrentUserRole;
