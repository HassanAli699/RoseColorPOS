
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

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>

          } />


          <Route path="/items" element={
            <ProtectedRoute>
              <ItemsPage />
            </ProtectedRoute>

          } />


          <Route path="/cart" element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>


          } />
          <Route path="/login" element={

            <Login />

          } />
          <Route path="/register" element={

            <Register />

          } />
          <Route path="/bills" element={
            <ProtectedRoute>

              <SalesPage />
            </ProtectedRoute>


          } />
          <Route path="/purchase" element={
            <ProtectedRoute>
              <PurchasePage />

            </ProtectedRoute>


          } />
          <Route path="/customers" element={
            <ProtectedRoute>

              <CustomersPage />
            </ProtectedRoute>


          } />
          <Route path="/category" element={
            <ProtectedRoute>

              <CategoryPage />
            </ProtectedRoute>


          } />
          <Route path="/brand" element={
            <ProtectedRoute>
              <BrandPage />

            </ProtectedRoute>


          } />
          <Route path="/controlpanel" element={
            <ProtectedRoute>
              <ControlPanelPage />

            </ProtectedRoute>


          } />

          <Route path="/salerec" element={
            <ProtectedRoute>
              <SaleRecordPage />

            </ProtectedRoute>


          } />
          <Route path="/purrec" element={
            <ProtectedRoute>

              <PurchaseRecordPage />
            </ProtectedRoute>


          } />
          <Route path="/customeracc" element={
            <ProtectedRoute>
              <CustomersAccountPage />
            </ProtectedRoute>


          } />
          <Route path="/supacc" element={
            <ProtectedRoute>
              <SuppliersAccountPage />
            </ProtectedRoute>


          } />
          <Route path="/salereturn" element={
            <ProtectedRoute>
              <SaleReturnedPage />
            </ProtectedRoute>


          } />
          <Route path="/bankacc" element={
            <ProtectedRoute>

              <BankAccount />
            </ProtectedRoute>


          } />
          <Route path="/purreturn" element={
            <ProtectedRoute>
              <PurchaseReturnedPage />
            </ProtectedRoute>


          } />
          <Route path="/producthistory" element={
            <ProtectedRoute>
              <ProductHistory />
            </ProtectedRoute>


          } />
          <Route path="/searchrec" element={
            <ProtectedRoute>
              <SearchRecordPage />
            </ProtectedRoute>


          } />
          <Route path="/sale-from-shop" element={
            <ProtectedRoute>
              <SaleFromShopPage />
            </ProtectedRoute>


          } />
          <Route path="/databack" element={
            <ProtectedRoute>
              <DataBackupPage />
            </ProtectedRoute>


          } />
          <Route path="/about" element={
            <ProtectedRoute>
              <AboutPage />
            </ProtectedRoute>


          } />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

export function ProtectedRoute({ children }) {
  if (localStorage.getItem('auth')) {
    return children
  } else {
    return <Navigate to='/login' />
  }
}
