import { Route, Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function PrivateRoute({ element, adminOnly, authenticated }) {
  if (adminOnly && !authenticated) {
    // Nếu yêu cầu quyền admin và người dùng chưa đăng nhập, chuyển hướng tới trang đăng nhập
    return <Navigate to="/login" />;
  }

  if (adminOnly && !isAdminUser()) {
    // Nếu yêu cầu quyền admin và người dùng không phải admin, chuyển hướng tới trang không được phép
    return <Navigate to="/not-authorized" />;
  }

  return <Route element={element} />;
}

function isAdminUser() {
  const token = localStorage.getItem('access_token');
  if (!token) {
    return false;
  }

  const decodedToken = jwtDecode(token);
  const userRole = decodedToken.role;

  return userRole === 'admin';
}

export default PrivateRoute;
