import { UserCircleIcon } from "@heroicons/react/24/solid";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateProductForm from "./components/CreateProductForm";
import Dashboard from "./components/Dashboard";
import OrdersTable from "./components/OrdersTable";
import ProductsTable from "./components/ProductsTable";
import CustomersTable from "./components/CustomersTable";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <SpaceDashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <SpaceDashboardIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <SpaceDashboardIcon /> },
  { name: "Users", path: "/admin/users", icon: <SpaceDashboardIcon /> },
  {
    name: "Categories",
    path: "/admin/categories",
    icon: <SpaceDashboardIcon />,
  },
  { name: "Brands", path: "/admin/brands", icon: <SpaceDashboardIcon /> },
  // { name: "", path: " "},
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();
  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: "bg-gray-200",
        width: "w-64",
        padding: "p-4",
        shadow: "shadow-lg",
        transition: "transition-transform",
      }}
    >
      <>
        {/* {isLargeScreen && <Toolbar />} */}
        <List>
          {menu.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => navigate(item.path)}
              className="py-2 hover:bg-gray-300 cursor-pointer"
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText className="text-gray-600">
                  {item.name}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <UserCircleIcon class="h-6 w-6 text-gray-500" />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <div className="flex h-screen">
        <CssBaseline />
        <div>{drawer}</div>
        <div></div>
        <Box className="flex-1 bg-white p-4">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route
              path="/product/create"
              element={<CreateProductForm />}
            ></Route>
            <Route path="/products" element={<ProductsTable />}></Route>
            <Route path="/orders" element={<OrdersTable />}></Route>
            <Route path="/customers" element={<CustomersTable />}></Route>
          </Routes>
        </Box>
      </div>
    </div>
  );
};

export default Admin;
