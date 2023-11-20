import Box from '@mui/material/Box';

import CancelIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

import {
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridRowModes,
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

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => async () => {
    const updatedRow = rows.find((row) => row.id === id);
    try {
      updateRole(updatedRow.id, updatedRow);
    } catch (error) {}
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
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
      valueGetter: (params) => params.row.inforUser?.phone,
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 180,
      valueGetter: (params) => params.row.inforUser?.address,
    },
    {
      field: 'role',
      headerName: 'is Admin ?',
      width: 220,
      editable: true,

      type: 'singleSelect',
      valueOptions: roles,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 400,
      cellClassName: 'actions',
      getActions: ({ id, row }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon className="transparent dark:text-gray-300" />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
      sx={{
        '& .MuiDataGrid-columnHeader': {
          backgroundColor: 'whitesmoke',
          color: 'black',
        },
        '& .MuiDataGrid-cell': {
          // ... cell styles
        },
      }}
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
