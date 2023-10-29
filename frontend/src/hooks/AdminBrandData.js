import { useEffect, useState } from "react";
import adminBrandApi from "../api/adminBrandApi";

const AdminBrandData = () => {
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await adminBrandApi.getAll();
        setBrandList(data);
        console.log(data);
      } catch (error) {
        if (error.response && error.response.status) {
          console.log('Error fetching product list: ' + error.message);
        } else {
          console.log('Error fetching product list: Unexpected error');
        }
      }
    };

    fetchData();
  }, []);

  return { brandList };
};

export default AdminBrandData;
