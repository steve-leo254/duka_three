import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Register from './pages/register';
import Login from './pages/login';
import Layout from './components/layout';
import Home from './pages/home';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import PrivateRoutes from './components/protectedRoute';
import LineAndBar from './pages/chartjs';
import sale from './pages/sale';


function App() {
  return (
    <Routes>
      <Route path='/' element={<CreateAcount />}></Route>
      <Route element={<PrivateRoutes />}>
        <Route path='/product' element={<product />}></Route>
        <Route path='/layout' element={<layout />}></Route>
        <Route path='/dashboard' element={<home />}></Route>
        <Route path='/sales' element={ <sale />}/>
        <Route path='/customer' element={ <Customer />}/>

      </Route>
      <Route path='/linebar' element={ <LineAndBar />}/>
    </Routes>
  )

}
export default App