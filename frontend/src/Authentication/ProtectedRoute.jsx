import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import getCurrentUserRole from './getCurrentUserRole';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const location = useLocation();

  const userRole = getCurrentUserRole();
  console.log(userRole);

  const hasPermission = allowedRoles.includes(userRole);

  if (!hasPermission) {
    return <Navigate to="/nothing" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
