import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ShopOutlined,
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
  DatabaseOutlined,
  CopyOutlined,
  DollarCircleOutlined,
  BankOutlined,
  HistoryOutlined,
  SwapOutlined,
  UnorderedListOutlined,
  ShoppingCartOutlined,
  ControlOutlined,
  InfoCircleOutlined,
  ReconciliationOutlined,
  ContainerOutlined,
  RollbackOutlined,
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

          <Menu.Item key="/bills" icon={<DollarCircleOutlined />}>
            <Link to="/bills">Sales</Link>
          </Menu.Item>

          <Menu.Item key="/purchase" icon={<CopyOutlined />}>
            <Link to="/purchase">Purchase</Link>
          </Menu.Item>

          <Menu.SubMenu title="Control Panel" icon={<ControlOutlined />}
            children >

            <Menu.Item key="/controlpanel" icon={<ControlOutlined />}>
              <Link to="/controlpanel">Settings</Link>
            </Menu.Item>

            <Menu.Item key="/items" icon={<UnorderedListOutlined />}>
              <Link to="/items">Products</Link>
            </Menu.Item>

          </Menu.SubMenu>

          <Menu.SubMenu title="Utilities" icon={<ToolOutlined />}
            children >


            <Menu.Item key="/salerec" icon={<DatabaseOutlined />}>
              <Link to="/salerec">Sale Record</Link>

            </Menu.Item>


            <Menu.Item key="/purrec" icon={<DatabaseOutlined />}>
              <Link to="/purrec">Purchase Record</Link>
            </Menu.Item>


            <Menu.Item key="/customeracc" icon={<UserOutlined />}>
              <Link to="/customeracc">Customers Account</Link>
            </Menu.Item>


            <Menu.Item key="/supacc" icon={<UserOutlined />}>
              <Link to="/supacc">Suppliers Account</Link>
            </Menu.Item>


            <Menu.Item key="/salereturn" icon={<SwapOutlined />}>
              <Link to="/salereturn">Sale Returned</Link>
            </Menu.Item>


            <Menu.Item key="/bankacc" icon={<BankOutlined />}>
              <Link to="/bankacc">Bank Account</Link>
            </Menu.Item>


            <Menu.Item key="/purreturn" icon={<SwapOutlined />}>
              <Link to="/purreturn">Purchase Returned</Link>
            </Menu.Item>


            <Menu.Item key="/producthistory" icon={<HistoryOutlined />}>
              <Link to="/producthistory">Product History</Link>
            </Menu.Item>


            <Menu.Item key="/searchrec" icon={<ReconciliationOutlined />}>
              <Link to="/searchrec">Search Record</Link>
            </Menu.Item>


            <Menu.Item key="/sale-from-shop" icon={<ShopOutlined />}>
              <Link to="/sale-from-shop">Sale From Shop</Link>
            </Menu.Item>

            <Menu.Item key="/databack" icon={<RollbackOutlined />}>
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
            padding: 15,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );

}

export default DefaultLayout