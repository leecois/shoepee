import { DataGrid } from "@mui/x-data-grid";

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'brandName', headerName: 'Brand Name', width: 230 },
    {
      field: 'description',
      headerName: 'Description',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 660,
    },
    { field: 'date', headerName: 'Date', width: 130 },
    
  ];
  
  const rows = [
    { id: 1, brandName: 'Nike', description: 'Nike is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.', date: '2022-09-01' },
    { id: 2, brandName: 'Adidas', description: 'Adidas is a German multinational corporation, founded and headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.', date: '2021-09-01' },
    { id: 3, brandName: 'Puma', description: 'Puma SE, branded as Puma, is a German multinational corporation that designs and manufactures athletic and casual footwear, apparel and accessories, which is headquartered in Herzogenaurach, Bavaria, Germany.', date: '2021-09-01' },
    { id: 4, brandName: 'New Balance', description: 'New Balance Athletics, Inc., best known as simply New Balance, is an American multinational corporation based in the Boston, Massachusetts area.', date: '2021-09-01' },
    { id: 5, brandName: 'Reebok', description: 'Reebok is an English footwear and apparel company, and a subsidiary of German sporting goods giant Adidas since 2005.', date: '2021-09-01' },
    { id: 6, brandName: 'Converse', description: 'Converse is an American shoe company that designs, distributes, and licenses sneakers, skating shoes, lifestyle brand footwear, apparel, and accessories.', date: '2021-09-01' },
  ];
  
  export default function BrandsListTable() {
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
