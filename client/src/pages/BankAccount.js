import React, { useState } from 'react';
import DefaultLayout from '../components/DefaultLayout'
import { Table, Input, DatePicker, Space, Button, Radio } from 'antd';

const BankAccount = () => {


    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const { TextArea } = Input;

    const [value, setValue] = useState(1);

    const onRadioChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const originData = [];
    for (let i = 0; i < 100; i++) {
        originData.push({
            key: i.toString(),
            name: `Edrward ${i}`,
            age: `${i}`,
            address: `${i}`,
        });
    }


    const columns = [
        {
            title: 'Invoice no.',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Date',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Particulars',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Debit',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Credit',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Balance',
            dataIndex: 'address',
            key: 'address',
        },
    ];



    return (
        <DefaultLayout>



            <div className='cusdatadiv'>

                <div className='halfpagediv'>

                    <div className='salesdis'>
                        <p className='inputdis sidebysideinput'><Input name='customername' type='text' placeholder="Name"></Input></p>
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


                    <Table
                        dataSource={originData}
                        columns={columns}
                        size='small'
                        bordered
                        pagination={false}
                        scroll={{ y: 240 }}
                        footer={() => 'Total'}
                    />

                    <div className='salesdis'>
                        <Button className='buttondis'>Print Statement</Button>
                        <Button className='buttondis'>Calculator</Button>
                        <Button className='buttondis'>Pending Cheque's</Button>

                    </div>

                </div>

                <div className='custsideinfodiv'>

                    <p>
                        Accounts Bio Data: <TextArea rows={4} />
                    </p>
                    <p >
                        Search Record:
                        <Radio.Group onChange={onRadioChange} value={value}>
                            <Radio value={1}>By Cheque no.
                                <p className='inputdis'>Cheque #<Input name='chequeno' type='text' placeholder="Cheque no."></Input></p>
                                <Button>Search</Button>
                            </Radio>
                            <Radio value={2}>By Reciept no.
                                <p className='inputdis'>Reciept #<Input name='recieptno' type='text' placeholder="Reciept no."></Input></p>
                                <Button>Search</Button>
                            </Radio>
                        </Radio.Group>

                    </p>

                    <div>
                        <Button className='buttondis'>Withdraw Cash</Button>
                        <Button className='buttondis'>Deposit Cash</Button>
                        <Button className='buttondis'>Transfer Cash</Button>
                        <Button className='buttondis'>Adjust</Button>

                    </div>

                </div>



            </div>

        </DefaultLayout>
    )
}

export default BankAccount