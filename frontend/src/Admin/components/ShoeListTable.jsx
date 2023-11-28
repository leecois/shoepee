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
import { useNavigate } from 'react-router-dom';

function EditToolbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/admin/tables/add-shoe');
  };

  return (
    <GridToolbarContainer>
      <Button
        color="inherit"
        style={{ fontWeight: 'bold', fontFamily: 'inherit' }}
        startIcon={<AddIcon />}
        onClick={handleClick}
      >
        Add Customized Shoe
      </Button>
    </GridToolbarContainer>
  );
}

export default function ShoeListTable({ shoeList, updateShoe, deleteShoe }) {
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const model = [...new Set(shoeList.map((item) => item.shoeModelDto.modelname))];

  useEffect(() => {
    if (shoeList) {
      setRows(
        shoeList.map((item) => ({
          ...item,
          modelname: item.shoeModelDto?.modelname,
        }))
      );
    }
  }, [shoeList]);

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
      updateShoe(updatedRow.id, updatedRow);
    } catch (error) {}
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setDeleteId(id);
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleConfirmDelete = () => {
    deleteShoe(deleteId).then(() => {
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
    // Copy the updated row and mark as not new
    const updatedRow = { ...newRow, isNew: false };
  
    // Update the shoeModelDto with the new model name
    updatedRow.shoeModelDto = {
      ...updatedRow.shoeModelDto,
      modelname: newRow.modelname
    };
  
    // Call update API
    try {
      await updateShoe(updatedRow.id, updatedRow);
    } catch (error) {
      console.error('Error updating shoe: ' + error.message);
    }
  
    // Update the rows state
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };
  

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 170, editable: true },
    {
      field: 'imageUrl',
      headerName: 'Image',
      width: 90,
      height: 90,
      editable: true,
      sortable: false,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="Shoe"
          style={{ width: '50px', height: '50px' }}
        />
      ),
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 400,
      editable: true,
    },
    {
      field: 'modelname',
      headerName: 'Model Name',
      width: 170,
      editable: true,

      type: 'singleSelect',
      valueOptions: model,
    },
    {
      field: 'shoeQuantity',
      headerName: 'Quantity',
      width: 170,
      editable: true,
    },

    { field: 'price', headerName: 'Price', width: 130, editable: true },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 200,
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
          <div className="tooltip tooltip-right" data-tip="Delete">
            <GridActionsCellItem
              icon={<DeleteIcon className="transparent dark:text-gray-300" />}
              label="Delete"
              onClick={handleDeleteClick(id)}
              color="inherit"
            />
          </div>,
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

        // Add any additional styling here
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
        className="dark:text-white" // Ensures text within DataGrid is white in dark mode
        components={{
          Toolbar: EditToolbar,
        }}
        // Removed slots and slotProps as they are not standard DataGrid properties
      />
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            backgroundColor: 'white', // Luxurious white background
            color: 'black', // Black for text for contrast
            boxShadow: 'none',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title" style={{ fontWeight: 'bold' }}>
          Delete Shoe
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this shoe?
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
