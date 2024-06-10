import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productlist from './pages/product';
// import Register from './pages/register';
import Login from './pages/login';
import Layout from './components/layout';
import Home from './pages/home';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import PrivateRoutes from './components/protectedRoute';
import Sale from './pages/sale';
import Addproduct from './pages/addproduct';
import Sidebar from './pages/navbar';
import Dashboard from './pages/dashboard';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PrivateRoutes />}>
          <Route index element={<Home />} />
          <Route path='addproduct' element={<Addproduct />}/>
          <Route path='product' element={<Productlist />}/>
          <Route path='layout' element={<Layout />}/>
          <Route path='dashboard' element={<Dashboard />}/>
          <Route path='sale' element={ <Sale />}/>
          <Route path="navbar" element={<Sidebar />} />
        </Route>
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
}

export default App;