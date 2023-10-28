import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Size Name', width: 230 },
  { field: 'value', headerName: 'Value', description: 'This column has a value getter and is not sortable.',
  sortable: false, type:'number', width: 130 },
  { field: 'date', headerName: 'Date', width: 130 },
  
];

const rows = [
  { id: 1, name: 'Small', value: '#141242', date: '2022-09-01' },
  { id: 2, name: 'Medium', value: 100, date: '2021-09-01' },
  { id: 3, name: 'Large', value: 100, date: '2021-09-01' },
  { id: 4, name: 'Extra Large', value: 100, date: '2021-09-01' },
  { id: 5, name: 'Extra Extra Large', value: 100, date: '2021-09-01' },
  { id: 6, name: 'Extra Extra Extra Large', value: 100, date: '2021-09-01' },
  { id: 7, name: 'Small', value: 100, date: '2021-09-01' },
  { id: 8, name: 'Medium', value: 100, date: '2021-09-01' },
  { id: 9, name: 'Large', value: 100, date: '2021-09-01' },
  { id: 10, name: 'Extra Large', value: 100, date: '2021-09-01' },
  { id: 11, name: 'Extra Extra Large', value: 100, date: '2021-09-01' },
  { id: 12, name: 'Extra Extra Extra Large', value: 100, date: '2021-09-01' },
  { id: 13, name: 'Small', value: 100, date: '2021-09-01' },
  { id: 14, name: 'Medium', value: 100, date: '2021-09-01' },
  { id: 15, name: 'Large', value: 100, date: '2021-09-01' },
  { id: 16, name: 'Extra Large', value: 100, date: '2021-09-01' },
  { id: 17, name: 'Extra Extra Large', value: 100, date: '2021-09-01' },
  { id: 18, name: 'Extra Extra Extra Large', value: 100, date: '2021-09-01' },
];

const SizesListTable = () => {
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

export default SizesListTable;
