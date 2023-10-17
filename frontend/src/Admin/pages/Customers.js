import React from 'react'
import {  Table } from 'antd';
const columns = [
  {
    title: 'Sno',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
      title: 'Address',
      dataIndex: 'address',
  },
    
    
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    status: 1,
    address: `London, Park Lane no. ${i}`,
  });
}
const Customers = () => {
  return (
    <div>
      <h3 className='mb-4'>Customers</h3>
      <div>
      <Table  columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default Customers
