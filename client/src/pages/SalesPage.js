import DefaultLayout from '../components/DefaultLayout'
import { SearchOutlined } from '@ant-design/icons';
import { Form, Input, InputNumber, Popconfirm, Table, Typography, Space, Button, Select } from 'antd';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';


// dummy data in table 1
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Joe Black',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Jim Green',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];

const originData = [];
for (let i = 0; i < 100; i++) {
    originData.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    });
}

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const SalesPage = () => {

    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record) => record.key === editingKey;
    const edit = (record) => {
        form.setFieldsValue({
            name: '',
            age: '',
            address: '',
            ...record,
        });
        setEditingKey(record.key);
    };
    const cancel = () => {
        setEditingKey('');
    };
    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };



    // functions 
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });


    const columns = [
        {
            title: 'List of Items',
            dataIndex: 'name',
            key: 'name',
            width: '30%',
            editable: true,
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Codes',
            dataIndex: 'age',
            key: 'age',
            width: '20%',
            editable: true,
            ...getColumnSearchProps('age'),
        },
        {
            title: 'Rates',
            dataIndex: 'address',
            key: 'address',
            width: '30%',
            editable: true,
            ...getColumnSearchProps('address'),
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

            ...getColumnSearchProps('name'),
        },
        {
            title: 'Codes',
            dataIndex: 'age',
            key: 'age',
            width: '20%',

            ...getColumnSearchProps('age'),
        },
        {
            title: 'Quantity',
            dataIndex: 'address',
            key: 'codes',
            width: '30%',

            ...getColumnSearchProps('address'),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },

        {
            title: 'Price',
            dataIndex: 'codes',
            key: 'address',
            width: '30%',

            ...getColumnSearchProps('address'),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },


    ];

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });


    return (
        <DefaultLayout>
            <h2>Sales Invoice : </h2>

            <div className='salesdis'>
                <p>Customer's Name : <Input name='customersname' type='text' placeholder="Customers Name"></Input> </p>


            </div>

            <div className='tablediv'  >

                <Form form={form} component={false}>
                    <Table

                        className='table'
                        components={{
                            body: {
                                cell: EditableCell,
                            },
                        }}
                        bordered
                        size='small'
                        dataSource={data}
                        columns={mergedColumns}
                        scroll={{ y: 240 }}
                        rowClassName="editable-row"

                    />
                </Form>

                <Form form={form} component={false}>
                    <Table
                        className='table'
                        components={{
                            body: {
                                cell: EditableCell,
                            },
                        }}
                        bordered='true'
                        size='small'
                        dataSource={data}
                        columns={itemColumns}
                        scroll={{ y: 240 }}
                        title={() => 'Items :'}

                    />
                </Form>


            </div>

            <h5>Sales : </h5>
            <div className='salesdis'>
                <p className='inputdis'>Pks :<Input name='Discount' type='number' placeholder="Pks"></Input> </p>
                <p className='inputdis'>PCs :<Input name='Discount' type='number' placeholder="Pcs"></Input> </p>
                <p className='inputdis'>Rate :<Input name='Discount' type='number' placeholder="Rate"></Input> </p>
                <p className='inputdis'>Total Price :<Input name='Discount' type='number' placeholder="Total Price"></Input> </p>

                <div >

                    <Button className='buttondis'>Add Item</Button>
                    <Button className='buttondis'>Remove Item</Button>
                </div>


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