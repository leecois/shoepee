import CancelIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridRowModes,
} from '@mui/x-data-grid';
import * as React from 'react';
import { useState } from 'react';

const roles = ['Admin', 'Customer'];

export default function AccountsListTable({ userData }) {
  const [rows, setRows] = useState(userData);
  const [rowModesModel, setRowModesModel] = useState({});
  // ID
  const dataWithIds = userData.map((user, index) => ({
    ...user,
    id: user.userId || index + 1,
  }));

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
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

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: 'userId', headerName: 'ID', width: 80 },
    { field: 'username', headerName: 'User Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 280 },
    {
      field: 'phone',
      headerName: 'Phone',
      type: 'number',
      width: 180,
    },
    { field: 'address', headerName: 'Address', width: 180, editable: true },
    {
      field: 'joinDate',
      headerName: 'Join date',
      type: 'date',
      width: 180,
    },
    {
      field: 'role',
      headerName: 'is Admin ?',
      width: 220,

      type: 'singleSelect',
      valueOptions: roles,
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
        className="dark:bg-boxdark dark:text-white"
        rows={dataWithIds}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
      />
    </Box>
  );
}
