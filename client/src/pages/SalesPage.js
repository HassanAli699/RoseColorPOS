import DefaultLayout from '../components/DefaultLayout'
import { SearchOutlined } from '@ant-design/icons';
import { Form, Input, InputNumber, Popconfirm, Table, Typography, Space, Button, Select } from 'antd';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';



const originData = [];
for (let i = 0; i < 100; i++) {
    originData.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: `${i}`,
        address: `${i}`,
    });
}


const SalesPage = () => {

    const [form] = Form.useForm();



    const columns = [
        {
            title: 'List of Items',
            dataIndex: 'name',
            key: 'name',
            width: '20%',
            editable: true,

        },
        {
            title: 'Codes',
            dataIndex: 'age',
            key: 'age',
            width: '10%',
            editable: true,

        },
        {
            title: 'Rates',
            dataIndex: 'address',
            key: 'address',
            width: '10%',
            editable: true,

            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },

    ];

    const itemColumns = [
        {
            title: 'Sold Items',
            dataIndex: 'name',
            key: 'name',
            width: '30%',


        },
        {
            title: 'Codes',
            dataIndex: 'age',
            key: 'age',
            width: '15%',

        },
        {
            title: 'Quantity',
            dataIndex: 'address',
            key: 'codes',
            width: '20%',

            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },

        {
            title: 'Price',
            dataIndex: 'codes',
            key: 'address',
            width: '15%',

            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },


    ];



    return (
        <DefaultLayout>
            <div className='salepageheaderdiv'>
                <h3>Sales Invoice : </h3>
                <p className='inputdiv'>Customer's Name : <Input className='inputmargindiv' name='customersname' type='text' placeholder="Customers Name"></Input> </p>
            </div>

            <div>
                <p className='inputdivsearch'>Search: <Input className='inputmargindiv' name='customersname' type='text' placeholder="Search Item"></Input> </p>
            </div>


            <div className='tablediv'  >

                <Form form={form} component={false}>
                    <Table

                        className='table'

                        bordered
                        pagination={false}
                        size='small'
                        dataSource={originData}
                        columns={columns}
                        scroll={{ y: 240 }}


                    />
                </Form>


                <div >
                    <Button className='buttondis'>Add Item</Button>

                    <Button className='buttondis'>Remove Item</Button>
                </div>



                <Form form={form} component={false}>
                    <Table
                        className='table'
                        bordered='true'
                        size='small'
                        pagination={false}
                        dataSource={originData}
                        columns={itemColumns}
                        scroll={{ y: 240 }}


                    />
                </Form>



            </div>

            <h5>Sales : </h5>
            <div className='salesdis'>
                <p className='inputdis'>Pks :<Input name='Discount' type='number' placeholder="Pks"></Input> </p>
                <p className='inputdis'>PCs :<Input name='Discount' type='number' placeholder="Pcs"></Input> </p>
                <p className='inputdis'>Rate :<Input name='Discount' type='number' placeholder="Rate"></Input> </p>
                <p className='inputdis'>Total Price :<Input name='Discount' type='number' placeholder="Total Price"></Input> </p>



            </div>


            <div className='salesdis'>

                <p className='inputdis'>Discount :<Input name='Discount' type='number' placeholder="Discount"></Input> </p>

                <p className='inputdis'>Net Amount :  <Input type='number' placeholder="Net Amount"></Input></p>

                <p className='inputdis'>Recieved : <Input type='number' placeholder="Recieved"></Input> </p>

                <p className='inputdis'>Balance : <Input type='number' placeholder="Balance"></Input></p>

            </div>

        </DefaultLayout>
    )
}

export default SalesPage