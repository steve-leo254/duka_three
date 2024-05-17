import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Product from './pages/product';
import Register from './pages/register';
import Login from './pages/login';
import Layout from './components/layout';
import Home from './pages/home';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import PrivateRoutes from './components/protectedRoute';
import Sale from './pages/sale';
import Sidebar from './pages/sidebar';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="*" element={<Layout />}/> 
        <Route index element={<Home />} />
        <Route path='product' element={<Product />}/>
        <Route path='layout' element={<Layout />}/>
        <Route path='dashboard' element={<Dashboard />}/>
        <Route path='sale' element={ <Sale />}/>
        <Route path="sidebar" element={<Sidebar />} />
      </Route>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;