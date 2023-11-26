import { SnackbarProvider } from 'notistack';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './Authentication/ProtectedRoute';
import AdminRouters from './Routers/AdminRouters';
import CustomerRouters from './Routers/CustomerRouters';

const App = () => {
  return (
    <SnackbarProvider
      dense
      maxSnack={3}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />

        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={['ADMIN']}>
              <AdminRouters />
            </ProtectedRoute>
          }
        />
      </Routes>
    </SnackbarProvider>
  );
};

export default App;
