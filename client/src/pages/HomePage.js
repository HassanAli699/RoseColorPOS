import React, { useState, Component } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Table, Input, DatePicker, Space, Button } from 'antd';


const HomePage = () => {

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const { Column, ColumnGroup } = Table;

  const data = [
    {
      key: '1',
      firstName: '1',
      lastName: '2',
      age: 32,
      address: 'New York No. 1 Lake Park',

    },
    {
      key: '2',
      firstName: '3',
      lastName: '4',
      age: 42,
      address: 'London No. 1 Lake Park',

    },
    {
      key: '3',
      firstName: '5',
      lastName: '6',
      age: 32,
      address: 'Sidney No. 1 Lake Park',

    },
  ];


  return (
    <DefaultLayout>

      <div className='homedatadiv'>

        <div className='homepagetablediv'>

          <div className='salesdis'>

            <p className='datechange'>
              From: <Space direction="vertical">
                <DatePicker onChange={onChange} />
              </Space>
            </p>
            <p>
              To: <Space direction="vertical">
                <DatePicker onChange={onChange} />
              </Space>
            </p>

          </div>

          <div className='hometablediv'>

            <Table dataSource={data}
              size='medium'
              bordered
              footer={() => ''}>
              <Column title="List Products" dataIndex="address" key="address" />
              <Column title="Rate" dataIndex="age" key="age" />

              <ColumnGroup title="Opening">
                <Column title="Ctns." dataIndex="firstName" key="firstName" />
                <Column title="Pcs." dataIndex="lastName" key="lastName" />
              </ColumnGroup>

              <ColumnGroup title="Stock In">
                <Column title="Ctns." dataIndex="firstName" key="firstName" />
                <Column title="Pcs." dataIndex="lastName" key="lastName" />
              </ColumnGroup>

              <ColumnGroup title="Stock Out">
                <Column title="Ctns." dataIndex="firstName" key="firstName" />
                <Column title="Pcs." dataIndex="lastName" key="lastName" />
              </ColumnGroup>

              <ColumnGroup title="Current Stocks">
                <Column title="Ctns." dataIndex="firstName" key="firstName" />
                <Column title="Pcs." dataIndex="lastName" key="lastName" />
                <Column title="Value" dataIndex="lastName" key="lastName" />

              </ColumnGroup>

            </Table>

          </div>

        </div>

        <div className='homedatediv'>
          <p>Date:</p>


          <p className='inputdis sidebysideinput'><Input name='company' type='text' placeholder="All Companies"></Input></p>
          <Button className='buttondis'>Available Stock</Button>
          <Button className='buttondis'>Low Stocks</Button>
          <Button className='buttondis'>All Products</Button>
        </div>

      </div>

    </DefaultLayout >
  )
}

export default HomePage