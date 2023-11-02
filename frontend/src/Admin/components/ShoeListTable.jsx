import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Shoe Name', width: 230 },
  { field: 'price', headerName: 'Price', type:'number', width: 130 },
  { field: 'brand', headerName: 'Brand', width: 130 },
  { field: 'model', headerName: 'Shoe Model', width: 130 },
  {
    field: 'sizes',
    headerName: 'Sizes',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  { field: 'date', headerName: 'Date', width: 130 },
  
];

const rows = [
  { id: 1, name: 'aike Air Max', price: 100.000, brand: 'Nike', model: 'Air Max', sizes: '8, 9, 10', date: '2022-09-01' },
  { id: 3, name: 'cike Air Max', price: 100.1241, brand: 'Nike', model: 'Air Max', sizes: '8, 9, 10', date: '2021-09-01' },
  { id: 2, name: 'bike Air Max', price: 100.1241, brand: 'Nike', model: 'Air Max', sizes: '8, 9, 10', date: '2021-09-01' },
  { id: 4, name: 'dike Air Max', price: 100.1241, brand: 'Nike', model: 'Air Max', sizes: '8, 9, 10', date: '2021-09-01' },
  { id: 5, name: 'eike Air Max', price: 100.1241, brand: 'Nike', model: 'Air Max', sizes: '8, 9, 10', date: '2021-09-01' },
  { id: 6, name: 'aike Air Max', price: 100.1241, brand: 'Nike', model: 'Air Max', sizes: '8, 9, 10', date: '2021-09-01' },
  { id: 7, name: 'gike Air Max', price: 100.1241, brand: 'Nike', model: 'Air Max', sizes: '8, 9, 10', date: '2021-09-01' },
  { id: 8, name: 'hike Air Max', price: 100.1241, brand: 'Nike', model: 'Air Max', sizes: '8, 9, 10', date: '2021-09-01' },
  { id: 9, name: 'Nike Air Max', price: 100.1241, brand: 'Nike', model: 'Air Max', sizes: '8, 9, 10', date: '2021-09-01' },
];

export default function ShoeListTable({ data }) {
  return (
    <div style={{ height: 630, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        className='bg-white dark:text-white dark:bg-boxdark'
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 25]}
        checkboxSelection
      />
    </div>
  );
}
