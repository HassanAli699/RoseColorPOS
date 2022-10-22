import React, { useEffect } from 'react'
import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { message } from 'antd'


const Register = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (value) => {
    try {
      dispatch({
        type: 'SHOW_LOADING'

      });
      await axios.post('/api/users/register', value)
      message.success('Register Successfully!')
      navigate('/login')

      dispatch({
        type: 'HIDE_LOADING'

      })


    } catch (error) {
      dispatch({
        type: 'HIDE_LOADING'

      })
      message.error('Something Went Wrong!')
      console.log(error)
    }
  }

  //Currently Login User
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      localStorage.getItem('auth')
      navigate('/')
    }
  }, [navigate])

  return (
    <>
      <div className='register' >

        <div className='register-form'>
          <h1>Rose Color Lab</h1>
          <h3>Register</h3>
          <Form layout='vertical' onFinish={handleSubmit}>

            <Form.Item name='name' label='Name'>

              <Input />
            </Form.Item>

            <Form.Item name='userId' label='User ID'>

              <Input />
            </Form.Item>

            <Form.Item name='password' label='Password' >

              <Input type='password' />
            </Form.Item>

            <div className='d-flex justify-content-center mb-3'>
              <Button type='primary' htmlType='submit'>Register</Button>

            </div>

            <div className='d-flex justify-content-center'>
              <p>Already Registered? <Link to='/login'>Login Here !</Link> </p>

            </div>



          </Form>

        </div>
      </div>
    </>
  )
}

export default Register