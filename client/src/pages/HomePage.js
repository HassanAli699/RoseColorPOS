import React, { useState, useEffect } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { Col, Row, Select } from 'antd';
import ItemList from './../components/ItemList';

const HomePage = () => {
  const [itemsData, setItemsData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('drinks')
  const categories = [
    {
      name: 'drinks',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vUaxERu9a4nHHVVn1kTjYrWbzkyEpKVO8Q&usqp=CAU'

    },
    {
      name: 'rice',
      imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/005/281/119/small_2x/rice-chinese-food-free-vector.jpg'
    },
    {
      name: 'noodles',
      imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/008/386/570/small_2x/asian-traditional-food-with-noodles-and-chopsticks-free-vector.jpg'
    }
  ]
  const dispatch = useDispatch()
  // Use Effect
  // useEffect(() => {
  //   const getAllItems =async () => {
  //     try {
  //       dispatch({
  //         type: 'SHOW_LOADING'

  //       })
  //       const {data} = await axios.get('/api/items/get-item')
  //       setItemsData(data);
  //       dispatch({
  //         type: 'HIDE_LOADING'

  //       })
  //       console.log(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getAllItems()
  // },[dispatch])
  return (
    <DefaultLayout>

      <div className='d-flex'>
        {categories.map(category => (
          <div key={category.name} className={`d-flex category ${selectedCategory === category.name && 'category-active'}`}
            onClick={
              () => setSelectedCategory(category.name)
            }
          >
            <h4>{category.name}</h4>
            <img src={category.imageUrl} alt={category.name} height='40' width='60' />
          </div>
        ))}
      </div>
      <Row>
        {
          itemsData.filter((i) => i.category === selectedCategory).map(item => (
            <Col xs={24} lg={6} md={12} sm={6}>
              <ItemList key={item.id} item={item} />
            </Col>
          ))
        }
      </Row>
    </DefaultLayout>
  )
}

export default HomePage