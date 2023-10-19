import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { FaBloggerB } from "react-icons/fa";
import { Outlet } from 'react-router-dom';
import {AiOutlineDashboard,AiOutlineShopping, AiOutlineOrderedList,AiTwotoneShopping } from "react-icons/ai"
import {AiOutlineUser, AiOutlineExperiment, AiFillMediumCircle, AiOutlineShoppingCart } from "react-icons/ai"
import {IoIosNotifications} from "react-icons/io"
import { Layout, Menu, Button, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { SiBrandfolder } from "react-icons/si";
import Dashboard from '../pages/Dashboard';

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
        <div className="logo" >
          <h2 className='text-white fs-5 text-center py-3 nb-0'>
            <span className='sm-logo'>SP</span>
            <span className='lg-logo'>Shoepee</span>
            </h2>
          </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key === "signout"){
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
              key: 'customers',
              icon: <AiOutlineUser className='fs-4'/>,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <AiOutlineShoppingCart className='fs-4'/>,
              label: 'Catalog',
              children: [
                {
                  
                    key: 'staff',
                    icon: <AiOutlineUser className='fs-4'/>,
                    label: 'Staffs',
                  
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
                key: 'model',
                icon: <AiTwotoneShopping className='fs-4'/>,
                label: 'Model',
                children: [
                  {
                    key: 'addmodel',
                  icon: <AiTwotoneShopping className='fs-4'/>,
                  label: 'Add Model',
                  },
                  {
                    key: 'Model',
                  icon: <AiTwotoneShopping className='fs-4'/>,
                  label: 'All Model',
                  }
                ]
              },
              ]
            },
            {
              key: 'bloglist',
              icon: <FaBloggerB className='fs-4'/>,
              label: 'BlogList',
            },
            {
              key: 'blogs',
              icon: <FaBloggerB className='fs-4'/>,
              label: 'Blog',
            },
            {
              key: 'blogcat',
              icon: <FaBloggerB className='fs-4'/>,
              label: 'BlogCategory',
            },
            {
              key: 'enquiries',
              icon: <AiFillMediumCircle className='fs-4'/>,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout className='site-layout'>
      <Header
        className='d-flex justify-content-between ps-3 pe-5'
        style={{ 
          padding: 0, 
          background: colorBgContainer, 
          }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined :MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <div className='d-flex gap-4 align-items-center'>
              <div className='position-relative'>
                <IoIosNotifications className='fs-4'/>
                <span className='badge bg-warning rounded-circle p-1 position-absolute'>3</span>
              </div>
            <div className='d-flex gap-3 align-items-center'>
                <div>
                  <img
                  width={32}
                  height={32}
                   src="https://images.all-free-download.com/images/graphiclarge/user_2_40788.jpg"  alt=""/>
                </div>
                <div>
                  <h5 className='text-dark mb-0'>TRAN HOAN</h5>
                  <p className='mb-0'>hoantse@fff.com</p>
                </div>
              </div>
            </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
        
          <Outlet/>
        
        </Content>
      </Layout>
    </Layout>
  );
  
};

export default MainLayout
