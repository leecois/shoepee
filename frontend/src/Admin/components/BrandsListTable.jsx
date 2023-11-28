import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridRowModes,
  GridToolbarContainer,
} from '@mui/x-data-grid';
import * as React from 'react';
import { useEffect, useState } from 'react';

function EditToolbar(props) {
  const { rows, setRows, setRowModesModel, addBrand } = props;

  const handleClick = () => {
    const maxId = Math.max(...rows.map((row) => row.id), 0);
    const id = maxId + 1;
    const newBrand = {
      id,
      brandName: '',
      imageUrl: '',
      isNew: true,
      status: 'available',
    };
    setRows((oldRows) => [...oldRows, newBrand]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'brandName' },
    }));
    addBrand(newBrand);
  };

  return (
    <GridToolbarContainer>
      <Button
        color="inherit"
        style={{ fontWeight: 'bold', fontFamily: 'sans-serif' }}
        startIcon={<AddIcon />}
        onClick={handleClick}
      >
        Add brand
      </Button>
    </GridToolbarContainer>
  );
}

export default function BrandsListTable({
  brandList,
  updateBrand,
  addBrand,
  deleteBrand,
}) {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    setRows(brandList?.map((item) => ({ ...item })));
  }, [brandList]);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    const updatedRow = rows.find((row) => row.id === id);
    if (updatedRow.isNew) {
      addBrand(updatedRow);
    } else {
      updateBrand(updatedRow.id, updatedRow);
    }
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDeleteClick = (id) => () => {
    setDeleteId(id);
    setOpenDialog(true);
  };
  const handleConfirmDelete = () => {
    deleteBrand(deleteId).then(() => {
      setRows(rows.filter((row) => row.id !== deleteId));
      handleCloseDialog();
    });
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
      await updateBrand(updatedRow.id, updatedRow);
    } catch (error) {
      // Handle error
      console.error('Error updating brand: ' + error.message);
    }

    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'brandName',
      headerName: 'Brand Name',
      width: 230,
      editable: true,
    },
    {
      field: 'imageUrl',
      headerName: 'Image',
      width: 130,
      editable: true,
      sortable: false,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="brand logo"
          style={{ width: '50px', height: '50px' }}
          className="object-cover"
        />
      ),
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 400,
      cellClassName: 'actions',
      getActions: ({ id }) => {
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
          <GridActionsCellItem
            icon={<DeleteIcon className="transparent dark:text-gray-300" />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
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
        '& .MuiInputBase-input': {
          '&:focus': {
            'box-shadow': 'none',
          },
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        components={{
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: { rows, setRows, setRowModesModel, addBrand },
        }}
        // Apply dark mode text color to the DataGrid using Tailwind's dark mode variant
        className="dark:text-white"
      />
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: 'white',
            color: 'black',
            boxShadow: 'none',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title" style={{ fontWeight: 'bold' }}>
          Delete Brand
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this brand?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} style={{ color: 'gray' }}>
            Cancel
          </Button>
          <Button
            onClick={handleConfirmDelete}
            style={{ color: 'red' }}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
