import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { rootReducer } from './../redux/rootReducer';
import {DeleteOutlined,PlusCircleOutlined,MinusCircleOutlined } from '@ant-design/icons';
import {Table} from 'antd';

const CartPage = () => {
    const dispatch = useDispatch()
    const {cartItems} = useSelector(state => state.rootReducer)
// Handle Increment
const handleIncrement = (record) => {
    dispatch({
        type:'UPDATE_CART',
        payload: { ...record, quantity:record.quantity + 1},
    })
}

// Hanlde Decrement 
const handleDecrement = (record) => {
    if(record.quantity !== 1){
        dispatch({
            type:'UPDATE_CART',
            payload: { ...record, quantity:record.quantity  - 1},
        });
    }
   
}

const columns = [
    {title:'Name', dataIndex:'name'},
    {title:'Image', dataIndex:'image', render:(image,record) => <img src={image} alt={record.name} height="60" width='60' />},
        
    {title:'Price', dataIndex:'price'},
    {title:'Quantity', dataIndex:'_id', render:(id,record) => <div>
        <MinusCircleOutlined className='mx-3' style={{cursor:'pointer'}} onClick={() => handleDecrement(record)}/>
        <b>{record.quantity}</b>
        <PlusCircleOutlined className='mx-3' style={{cursor:'pointer'}} onClick={() => handleIncrement(record)}/>
        
    </div> },
    {title:'Actions', dataIndex:'_id', render: (id,record) => <DeleteOutlined 
    style={{cursor:'pointer'}} onClick={() =>  dispatch({
        type: 'DELETE_FROM_CART',
        payload: record,
    })} />}

]

  return (
    (<DefaultLayout>
        <h1>
        Your Cart
        </h1>

        <Table columns={columns} dataSource={cartItems} bordered/>


    </DefaultLayout>)
  )
}

export default CartPage