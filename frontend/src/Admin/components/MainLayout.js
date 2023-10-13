import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {AiOutlineDashboard,AiOutlineShopping, AiOutlineOrderedList,AiTwotoneShopping } from "react-icons/ai"
import {AiOutlineUser, AiOutlineExperiment, AiFillMediumCircle, AiOutlineShoppingCart } from "react-icons/ai"
import { Layout, Menu, Button, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { SiBrandfolder } from "react-icons/si";

const { Header, Sider, Content } = Layout;
const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
      } = theme.useToken();
      const navigate = useNavigate();
     
  return (
     <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key == "signout"){
             } else {
              navigate(key);
             }

          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'customer',
              icon: <AiOutlineUser className='fs-4'/>,
              label: 'Customers',
            },
            {
              key: 'orders',
              icon: <AiOutlineShopping className='fs-4'/>,
              label: 'Orders',
            },
            {
              key: 'catalog',
              icon: <AiOutlineShoppingCart className='fs-4'/>,
              label: 'Catalog',
              children: [
                {
                  
                    key: 'cate',
                    icon: <AiOutlineOrderedList className='fs-4'/>,
                    label: 'Categories',
                  
                },
                {
                  
                  key: 'catelist',
                  icon: <AiOutlineOrderedList className='fs-4'/>,
                  label: 'Categories List',
                
                },
                {
                  
                  key: 'brand',
                  icon: <SiBrandfolder className='fs-4'/>,
                  label: 'Brand',
                
                },
                {
                  
                  key: 'brandlist',
                  icon: <SiBrandfolder className='fs-4'/>,
                  label: 'Brand List',
                
                },
              {
                key: 'products',
                icon: <AiTwotoneShopping className='fs-4'/>,
                label: 'Products',
                children: [
                  {
                    key: 'addproducts',
                  icon: <AiTwotoneShopping className='fs-4'/>,
                  label: 'add Products',
                  },
                  {
                    key: 'allproducts',
                  icon: <AiTwotoneShopping className='fs-4'/>,
                  label: 'all Products',
                  }
                ]
              },
              ]
            },
            
            
            {
              key: 'staffs',
              icon: <AiOutlineUser className='fs-4'/>,
              label: 'Staffs',
            },
            {
              key: 'material',
              icon: <AiOutlineExperiment className='fs-4'/>,
              label: 'Materials',
            },
            {
              key: 'sm',
              icon: <AiFillMediumCircle className='fs-4'/>,
              label: 'Social media',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
  
};

export default MainLayout
