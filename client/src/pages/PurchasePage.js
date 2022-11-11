import DefaultLayout from '../components/DefaultLayout'
import { SearchOutlined } from '@ant-design/icons';
import { Form, Input, InputNumber, Popconfirm, Table, Typography, Space, Button, Select } from 'antd';
import React, { useRef, useState } from 'react';




const originData = [];
for (let i = 0; i < 100; i++) {
    originData.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: `${i}`,
        address: `${i}`,
    });
}

const PurchasePage = () => {

    const [form] = Form.useForm();

    const columns = [
        {
            title: 'List of Items',
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
            title: 'Rates',
            dataIndex: 'address',
            key: 'address',
            width: '15%',


            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },

    ];

    const itemColumns = [
        {
            title: 'Purchased Items',
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
            width: '15%',
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },

        {
            title: 'Price',
            dataIndex: 'codes',
            key: 'address',
            width: '30%',
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },


    ];


    return (
        <DefaultLayout>

            <div className='salepageheaderdiv'>
                <h3>Purchase Invoice : </h3>
                <p className='inputdiv'>Supplier's Name : <Input className='inputmargindiv' name='suppliername' type='text' placeholder="Suppliers Name"></Input> </p>
            </div>

            <div>
                <p className='inputdivsearch'>Product: <Input className='inputmargindiv' name='productname' type='text' placeholder="Search Product"></Input> </p>
            </div>

            <div className='tablediv'  >

                <Form form={form} component={false}>
                    <Table

                        className='table'
                        bordered
                        size='small'
                        dataSource={originData}
                        columns={columns}
                        scroll={{ y: 240 }}
                        pagination={false}


                    />
                </Form>

                <div >
                    <Button className='buttondis'>Add Item</Button>
                    <Button className='buttondis'>Remove Item</Button>
                </div>

                <Form form={form} component={false}>
                    <Table
                        className='table'
                        bordered
                        size='small'
                        dataSource={originData}
                        columns={itemColumns}
                        scroll={{ y: 240 }}
                        pagination={false}

                    />
                </Form>


            </div>


            <h5>Purchased : </h5>
            <div className='salesdis'>
                <p className='inputdis'>Pks :<Input name='Discount' type='number' placeholder="Pks"></Input> </p>
                <p className='inputdis'>PCs :<Input name='Discount' type='number' placeholder="Pcs"></Input> </p>
                <div className='salesdis'>

                    <p className='inputdis'>Bonus Pks :<Input name='bonuspks' type='number' placeholder="Bonus Pks"></Input> </p>
                    <p className='inputdis'>Bonus Pcs :<Input name='bonuspcs' type='number' placeholder="Bonus Pcs"></Input> </p>

                </div>
                <p className='inputdis'>Rate :<Input name='Discount' type='number' placeholder="Rate"></Input> </p>
                <p className='inputdis'>Total Price :<Input name='Discount' type='number' placeholder="Total Price"></Input> </p>





            </div>


            <div className='salesdis'>

                <p className='inputdis'>Invoice No :<Input name='invoiceno' type='number' placeholder="Inoice Number"></Input> </p>

                <p className='inputdis'>Discount :<Input name='Discount' type='number' placeholder="Discount"></Input> </p>

                <p className='inputdis'>Net Amount :  <Input type='number' placeholder="Net Amount"></Input></p>

                <p className='inputdis'>Paid Amount : <Input type='number' placeholder="Recieved"></Input> </p>

                <p className='inputdis'>Balance : <Input type='number' placeholder="Balance"></Input></p>

            </div>




        </DefaultLayout>
    )
}

export default PurchasePage