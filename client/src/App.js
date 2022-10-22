
import 'antd/dist/antd.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import BankAccount from './pages/BankAccount';
import BrandPage from './pages/BrandPage';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import ControlPanelPage from './pages/ControlPanelPage';
import CustomersAccountPage from './pages/CustomersAccountPage';
import CustomersPage from './pages/CustomersPage';
import DataBackupPage from './pages/DataBackupPage';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';
import Login from './pages/Login';
import ProductHistory from './pages/ProductHistory';
import PurchasePage from './pages/PurchasePage';
import PurchaseRecordPage from './pages/PurchaseRecordPage';
import PurchaseReturnedPage from './pages/PurchaseReturnedPage';
import Register from './pages/Register';
import SaleFromShopPage from './pages/SaleFromShopPage';
import SaleRecordPage from './pages/SaleRecordPage';
import SaleReturnedPage from './pages/SaleReturnedPage';
import SalesPage from './pages/SalesPage';
import SearchRecordPage from './pages/SearchRecordPage';
import SuppliersAccountPage from './pages/SuppliersAccountPage';
import TelephoneDirectoryPage from './pages/TelephoneDirectoryPage';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={
            <HomePage />

          } />


          <Route path="/items" element={

            <ItemsPage />


          } />


          <Route path="/cart" element={

            <CartPage />



          } />
          <Route path="/login" element={

            <Login />

          } />
          <Route path="/register" element={

            <Register />

          } />
          <Route path="/bills" element={


            <SalesPage />



          } />
          <Route path="/purchase" element={

            <PurchasePage />




          } />
          <Route path="/customers" element={


            <CustomersPage />



          } />
          <Route path="/category" element={


            <CategoryPage />



          } />
          <Route path="/brand" element={

            <BrandPage />




          } />
          <Route path="/controlpanel" element={

            <ControlPanelPage />




          } />
          <Route path="/telephonedir" element={


            <TelephoneDirectoryPage />




          } />
          <Route path="/salerec" element={

            <SaleRecordPage />




          } />
          <Route path="/purrec" element={


            <PurchaseRecordPage />



          } />
          <Route path="/customeracc" element={

            <CustomersAccountPage />
          } />
          <Route path="/supacc" element={

            <SuppliersAccountPage />



          } />
          <Route path="/salereturn" element={

            <SaleReturnedPage />



          } />
          <Route path="/bankacc" element={


            <BankAccount />



          } />
          <Route path="/purreturn" element={

            <PurchaseReturnedPage />



          } />
          <Route path="/producthistory" element={

            <ProductHistory />



          } />
          <Route path="/searchrec" element={

            <SearchRecordPage />



          } />
          <Route path="/sale-from-shop" element={

            <SaleFromShopPage />



          } />
          <Route path="/databack" element={

            <DataBackupPage />



          } />
          <Route path="/about" element={

            <AboutPage />



          } />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// export function ProtectedRoute({ children }) {
//   if (localStorage.getItem('auth')) {
//     return children
//   } else {
//     return <Navigate to='/login' />
//   }
// }
