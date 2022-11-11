import React, { useState } from 'react';
import DefaultLayout from '../components/DefaultLayout'
import { Table, Input, DatePicker, Space, Button, Radio } from 'antd';

const SuppliersAccountPage = () => {

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
            <h3>Supplier's Account</h3>

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
                        <Button className='buttondis'>Discount</Button>
                        <Button className='buttondis'>Credit Note</Button>
                        <Button className='buttondis'>Calculator</Button>
                    </div>

                </div>

                <div className='supsideinfodiv'>
                    <h5>
                        Adjustment
                    </h5>
                    <p>
                        Supplier's Bio Data: <TextArea rows={4} />
                    </p>
                    <p className='custsideinfodiv'>
                        Search Record:

                        <p className='inputdis'>Slip #<Input name='slipno' type='text' placeholder="Slip no."></Input></p>
                        <Button>Search</Button>


                    </p>

                    <div>
                        <Radio.Group onChange={onRadioChange} value={value}>
                            <Radio value={1}>Paid Cash
                                <p className='sidebysideinput'>Final Dues<Input name='finaldues' type='text' placeholder="Final Dues"></Input></p>
                                <p className='inputdis sidebysideinput'>Paid Now<Input name='receviednow' type='text' placeholder="Recevied Now"></Input></p>
                                <p className='inputdis sidebysideinput'>Remarks<Input name='remarks' type='text' placeholder="Remarks"></Input></p>
                            </Radio>

                            <Radio value={2}>
                                Recieved By Cheque
                                <p className='inputdis'>Due Now<Input name='duebalance' type='number' placeholder="0"></Input></p>
                            </Radio>

                        </Radio.Group>
                    </div>
                </div>
            </div>

        </DefaultLayout>
    )
}

export default SuppliersAccountPage