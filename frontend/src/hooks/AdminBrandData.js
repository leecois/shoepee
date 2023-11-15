import { useEffect, useState } from 'react';
import adminBrandApi from '../api/adminBrandApi';

const AdminBrandData = () => {
  const [brandList, setBrandList] = useState([]);

  const fetchData = async () => {
    try {
      let data = await adminBrandApi.getAll();

      data = data
        .map((brand) => ({
          ...brand,
          shoeModel: brand.shoeModel
            ? brand.shoeModel.filter((model) => model.status === 'available')
            : [],
        }))
        .filter(
          (brand) => brand.status === 'available'
        );

      setBrandList(data);
    } catch (error) {
      console.error('Error fetching product list: ' + error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateBrand = async (id, updatedData) => {
    try {
      const updatedBrand = await adminBrandApi.update(id, updatedData);
      const updatedBrandList = brandList.map((brand) =>
        brand.id === id ? updatedBrand : brand
      );
      setBrandList(updatedBrandList);
    } catch (error) {
      console.error('Error updating brand: ' + error.message);
    }
  };

  const addBrand = async (newBrandData) => {
    try {
      const newBrand = await adminBrandApi.add(newBrandData);
      setBrandList((prevBrandList) => [...prevBrandList, newBrand]);
    } catch (error) {
      console.error('Error adding brand: ' + error.message);
    }
  };

  const deleteBrand = async (id) => {
    try {
      await adminBrandApi.remove(id);
      setBrandList((prevBrandList) =>
        prevBrandList.filter((brand) => brand.id !== id)
      );
    } catch (error) {
      console.error('Error deleting brand: ' + error.message);
    }
  };

  return { brandList, updateBrand, addBrand, deleteBrand };
};

export default AdminBrandData;
