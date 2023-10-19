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
import OrderTable from "./components/OrderTable";
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
        // border: "1px solid black",
        height: "100%",
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
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
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
      <Box sx={{ display: `${isLargeScreen} ? "flex":"black"` }}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          sx={{
            height: "100vh",
            border: "1px solid black",
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 240,
              boxSizing: "border-box",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Box>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route
              path="/product/create"
              element={<CreateProductForm />}
            ></Route>
            <Route path="/products" element={<ProductsTable />}></Route>
            <Route path="/orders" element={<OrderTable />}></Route>
            <Route path="/customers" element={<CustomersTable />}></Route>
          </Routes>
        </Box>
      </Box>
    </div>
  );
};

export default Admin;
