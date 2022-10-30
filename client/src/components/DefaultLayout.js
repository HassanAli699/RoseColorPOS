import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
  CopyOutlined,
  UnorderedListOutlined,
  ShoppingCartOutlined,
  ControlOutlined,
  InfoCircleOutlined,
  ContainerOutlined,
  StarOutlined,
  ToolOutlined

} from "@ant-design/icons";
import "../Styles/DefaultLayout.css";
import Spinner from "./Spinner";
const { Header, Sider, Content } = Layout;

const DefaultLayout = ({ children }) => {
  const navigate = useNavigate()
  const { cartItems, loading } = useSelector(state => state.rootReducer)
  const [collapsed, setCollapsed] = useState(false)


  const toggle = () => {
    setCollapsed(
      !collapsed
    );
  };

  // to get Local Storage Data
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <Layout>

      {loading && <Spinner />}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-center text-light font-wight-bold mt-4">Rose Color</h2>

        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={window.location.pathname}
        >
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item key="/bills" icon={<CopyOutlined />}>
            <Link to="/bills">Sales</Link>
          </Menu.Item>

          <Menu.Item key="/purchase" icon={<UserOutlined />}>
            <Link to="/purchase">Purchase</Link>
          </Menu.Item>



          <Menu.Item key="/customers" icon={<UserOutlined />}>
            <Link to="/customers">Customers</Link>
          </Menu.Item>


          <Menu.SubMenu title="Control Panel" icon={<ControlOutlined />}
            children >

            <Menu.Item key="/controlpanel" icon={<ControlOutlined />}>
              <Link to="/controlpanel">Settings</Link>
            </Menu.Item>

            <Menu.Item key="/brand" icon={<StarOutlined />}>
              <Link to="/brand">Brands</Link>
            </Menu.Item>

            <Menu.Item key="/category" icon={<ContainerOutlined />}>
              <Link to="/category">Category</Link>
            </Menu.Item>

            <Menu.Item key="/items" icon={<UnorderedListOutlined />}>
              <Link to="/items">Products</Link>
            </Menu.Item>

          </Menu.SubMenu>

          <Menu.SubMenu title="Utilities" icon={<ToolOutlined />}
            children >


            <Menu.Item key="/salerec" icon={<StarOutlined />}>
              <Link to="/salerec">Sale Record</Link>

            </Menu.Item>


            <Menu.Item key="/purrec" icon={<StarOutlined />}>
              <Link to="/purrec">Purchase Record</Link>
            </Menu.Item>


            <Menu.Item key="/customeracc" icon={<StarOutlined />}>
              <Link to="/customeracc">Customers Account</Link>
            </Menu.Item>


            <Menu.Item key="/supacc" icon={<StarOutlined />}>
              <Link to="/supacc">Suppliers Account</Link>
            </Menu.Item>


            <Menu.Item key="/salereturn" icon={<StarOutlined />}>
              <Link to="/salereturn">Sale Returned</Link>
            </Menu.Item>


            <Menu.Item key="/bankacc" icon={<StarOutlined />}>
              <Link to="/bankacc">Bank Account</Link>
            </Menu.Item>


            <Menu.Item key="/purreturn" icon={<StarOutlined />}>
              <Link to="/purreturn">Purchase Returned</Link>
            </Menu.Item>


            <Menu.Item key="/producthistory" icon={<StarOutlined />}>
              <Link to="/producthistory">Product History</Link>
            </Menu.Item>


            <Menu.Item key="/searchrec" icon={<StarOutlined />}>
              <Link to="/searchrec">Search Record</Link>
            </Menu.Item>


            <Menu.Item key="/sale-from-shop" icon={<StarOutlined />}>
              <Link to="/sale-from-shop">Sale From Shop</Link>
            </Menu.Item>

            <Menu.Item key="/databack" icon={<StarOutlined />}>
              <Link to="/databack">Data Backup/Restore</Link>
            </Menu.Item>


          </Menu.SubMenu>

          <Menu.Item key="/about" icon={<InfoCircleOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>

          <Menu.Item
            key="/logout"
            icon={<LogoutOutlined />}
            onClick={() => {
              localStorage.removeItem('auth')
              navigate('/login')
            }}
          >
            Logout
          </Menu.Item>

        </Menu>
      </Sider>
      <Layout className="site-layout">

        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );

}

export default DefaultLayout