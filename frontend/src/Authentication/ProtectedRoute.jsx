import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import getCurrentUserRole from './getCurrentUserRole';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const location = useLocation();

  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('is_authenticated') === 'true';

  const userRoles = getCurrentUserRole();

  const hasPermission = allowedRoles.some((role) => userRoles.includes(role));

  if (!isAuthenticated) {
    return <Navigate to="/nothing" state={{ from: location }} replace />;
  }

  // If authenticated but doesn't have permission, redirect to error page
  if (!hasPermission) {
    return <Navigate to="/nothing" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
