import React, { useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Table, Input, DatePicker, Space, Button, Radio } from 'antd';


const ItemsPage = () => {

  const [value, setValue] = useState(1);

  const onRadioChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const dataSource = [
    {
      key: '1',
      name: 'Mike'
    },

    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '3',
      name: 'Mike'
    }, {
      key: '4',
      name: 'Mike'
    }, {
      key: '5',
      name: 'Mike'
    }, {
      key: '6',
      name: 'Mike'
    }, {
      key: '7',
      name: 'Mike'
    }, {
      key: '8',
      name: 'Mike'
    }, {
      key: '9',
      name: 'Mike'
    }, {
      key: '10',
      name: 'Mike'
    }, {
      key: '11',
      name: 'Mike'
    }, {
      key: '12',
      name: 'Mike'
    },
    {
      key: '13',
      name: 'Mike'
    }, {
      key: '14',
      name: 'Mike'
    }, {
      key: '15',
      name: 'Mike'
    }, {
      key: '16',
      name: 'Mike'
    }, {
      key: '17',
      name: 'Mike'
    }, {
      key: '18',
      name: 'Mike'
    }, {
      key: '19',
      name: 'Mike'
    },
  ];

  const columns = [
    {
      title: 'List of Products',
      dataIndex: 'name',
      key: 'name',
    },

  ];

  return (
    <DefaultLayout>

      <div className='productpagediv'>

        <div className='itempagediv'>
          <Radio.Group onChange={onRadioChange} value={value}>
            <Radio value={1}>Available

            </Radio>

            <Radio value={2}>
              Recycle Bin

            </Radio>


          </Radio.Group>



          <div className='itemtablediv'>
            <p className='sidebysideinput'><Input name='companyname' type='text' placeholder="Company name"></Input></p>
            <Table
              className='itemtabledivnew'
              bordered
              pagination={false}
              size='small'
              dataSource={dataSource}
              columns={columns}
              scroll={{ y: 240 }}

            />

          </div>

          <div>
            <Button className='buttondis'>Search</Button>

          </div>




        </div>

        <div className='itembiodatadiv'>

          <h5>Product's BioData</h5>
          <p className='newsidebysideinput'>Code<Input name='productcode' type='number' placeholder="Product Code"></Input></p>
          <p className='newsidebysideinput'>Name<Input name='productcode' type='number' placeholder="Product Name"></Input></p>
          <p className='newsidebysideinput'>Personal Code<Input name='productcode' type='number' placeholder="Personal Code"></Input></p>
          <p className='newsidebysideinput'>Packing<Input name='productcode' type='number' placeholder="Packaging"></Input></p>

          <p className='newsidebysideinput'>Company<Input name='productcode' type='number' placeholder="Company"></Input></p>



          <p className='ratesdiv'>Purchase Rate<Input name='productcode' type='number' placeholder="Purchase Rate"></Input>
            <p className='ratesdiv'>Per Peice <Input name='productcode' type='number' placeholder="Purchase Rate"></Input></p>
          </p>
          <p className='ratesdiv'>Trade Rate<Input name='productcode' type='number' placeholder="Purchase Rate"></Input>
            <p className='ratesdiv'>Per Peice <Input name='productcode' type='number' placeholder="Purchase Rate"></Input></p>
          </p>
          <p className='ratesdiv'>Retail Rate<Input name='productcode' type='number' placeholder="Purchase Rate"></Input>
            <p className='ratesdiv'>Per Peice <Input name='productcode' type='number' placeholder="Purchase Rate"></Input></p>
          </p>


          <p className='newsidebysideinput'>Minimun Stock<Input name='productcode' type='number' placeholder="Minimum Stock"></Input></p>
          <p className='newsidebysideinput'>Unit<Input name='productcode' type='number' placeholder="Qty"></Input></p>



          <div className='itempagebuttondiv'>
            <Button className='buttondis'>Add New</Button>
            <Button className='buttondis'>Edit</Button>
            <Button className='buttondis'>Save</Button>
            <Button className='buttondis'>Delete</Button>
          </div>


        </div>




      </div>




    </DefaultLayout>
  )
}

export default ItemsPage