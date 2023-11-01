import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'model', headerName: 'Model Name', width: 230 },
  { field: 'price', headerName: 'Price', type:'number', width: 130 },
  { field: 'brandName', headerName: 'Brand Name', width: 230 },
  {
    field: 'sizes',
    headerName: 'Sizes',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 260,
  },
  { field: 'date', headerName: 'Date', width: 130 },
  
];

const rows = [
  { id: 1, model: 'Air Max', price: 100, brandName: 'Nike', sizes: '7, 8, 9', date: '2022-09-01' },
  { id: 2, model: 'Air Force 1', price: 100, brandName: 'Nike', sizes: '7, 8, 9', date: '2021-09-01' },
  { id: 3, model: 'Superstar', price: 100, brandName: 'Adidas', sizes: '7, 8, 9', date: '2021-09-01' },
  { id: 4, model: 'Stan Smith', price: 100, brandName: 'Adidas', sizes: '7, 8, 9', date: '2021-09-01' },
  { id: 5, model: 'Suede', price: 100, brandName: 'Puma', sizes: '7, 8, 9', date: '2021-09-01' },
  { id: 6, model: 'Roma', price: 100, brandName: 'Puma', sizes: '7, 8, 9', date: '2021-09-01' },
  { id: 7, model: '574', price: 100, brandName: 'New Balance', sizes: '7, 8, 9', date: '2021-09-01' },
  { id: 8, model: '997', price: 100, brandName: 'New Balance', sizes: '7, 8, 9', date: '2021-09-01' },
  { id: 9, model: 'Classic Leather', price: 100, brandName: 'Reebok', sizes: '7, 8, 9', date: '2021-09-01' },
  { id: 10, model: 'Club C', price: 100, brandName: 'Reebok', sizes: '7, 8, 9', date: '2021-09-01' },
  { id: 11, model: 'Chuck Taylor All Star', price: 100, brandName: 'Converse', sizes: '7, 8, 9', date: '2021-09-01' },
];
  
 export default function ModelsTable () {
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
  };

  