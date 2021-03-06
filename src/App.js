import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header/Header';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AddFurniture from './pages/AddFurniture/AddFurniture';
import ManageAll from './pages/ManageAll/ManageAll';
import Footer from './pages/Footer/Footer';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/product/:productId' element={
          <ProductDetails></ProductDetails>
        }></Route>
        <Route path='/addproduct' element={<AddFurniture></AddFurniture>}></Route>
        <Route path='/manageall' element={<ManageAll></ManageAll>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
