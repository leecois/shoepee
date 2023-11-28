import Box from '@mui/material/Box';


import {
  DataGrid,
  GridRowEditStopReasons
} from '@mui/x-data-grid';
import * as React from 'react';
import { useEffect, useState } from 'react';

export default function AccountsListTable({ userData, updateRole }) {
  const [rows, setRows] = useState(userData);
  const [rowModesModel, setRowModesModel] = useState({});
  const roles = [...new Set(userData.map((item) => item.role))];
  // ID
  useEffect(() => {
    setRows(
      userData.map((item) => ({
        ...item,
        id: item.userId,
      }))
    );
  }, [userData]);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const processRowUpdate = async (newRow) => {
    const updatedRow = { ...newRow, isNew: false };

    // Call update API
    try {
      await updateRole(updatedRow.id, updatedRow);
    } catch (error) {
      // Handle error
      console.error('Error updating role: ' + error.message);
    }

    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'username', headerName: 'User Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 280 },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 180,
      sortable: false,
      valueGetter: (params) => params.row.inforUser?.phone,
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 180,
      sortable: false,
      valueGetter: (params) => params.row.inforUser?.address,
    },
    {
      field: 'role',
      headerName: 'is Admin ?',
      width: 150,

      type: 'singleSelect',
      valueOptions: roles,
    },
  ];

  return (
    <Box
      className="dark:bg-boxdark-2 p-4" // Adjusted for a darker gray in dark mode and padding for the box
      sx={{
        height: 700,
        width: '100%',
        '& .MuiDataGrid-root': {
          borderColor: 'transparent', // Removes default border
        },
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: 'black', // GUCCI often uses black in their designs
          color: 'white',
          fontFamily: 'sans-serif', // A font that could fit the luxurious theme
        },
        '& .MuiDataGrid-cell': {
          fontFamily: 'sans-serif', // Consistent font for the cells
          '&.dark:text-white': {
            color: 'white !important', // Ensures text color is white in dark mode
          },
        },
        '& .MuiDataGrid-cell:focus': {
          outline: 'none', // Remove the focus outline
        },
        '& .MuiDataGrid-columnSeparator': {
          display: 'none', // Hiding column separators for a cleaner look
        },
        '& .MuiDataGrid-menuIcon': {
          color: 'white', // Making sure all icons are visible in dark mode
        },
        '& .MuiDataGrid-toolbar': {
          color: 'white',
        },
        '& .MuiTablePagination-root': {
          color: 'gray', // or any color you want
        },
        '& .MuiIconButton-root': {
          color: 'gray',
          '&.dark:text-white': {
            color: 'white !important',
          },
        },
        // Add any additional styling here
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        className="dark:text-white"
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
      />
    </Box>
  );
}
