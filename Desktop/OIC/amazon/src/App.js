import { Route, Routes } from 'react-router-dom';
import './App.css';
import User from './components/user';
import Footer from './components/footer';
import Home from './components/Home';
import AllProduct from './components/AllProduct';
import Register from './components/register';
import Login from './components/login';
import Automotive from './components/category/Automotive';
import Bag from './components/category/bag';
import Beauty from './components/category/beauty';
import Decor from './components/category/decor';
import Fragrance from './components/category/fragrance';
import Grocery from './components/category/grocery';
import Laptop from './components/category/laptop';
import Glass from './components/category/glass';
import Phone from './components/category/phone';
import Shoes from './components/category/shoes';
import Watch from './components/category/watch';
import Furniture from './components/category/furniture';
import Cloth from './components/category/cloth';
import Blog from './components/blog';
import Cart from './components/cart';
import Details from './components/details';
import Switchs from './components/switch';

function App() {
  return (
    <>
    <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/product' element={<AllProduct/>}/>
   <Route path='/register' element={<Register/>}/>
   <Route path='/profile' element={<User/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/car' element={<Automotive/>}/>
   <Route path='/bag' element={<Bag/>}/>
   <Route path='/decor' element={<Decor/>}/>
   <Route path='/shoe' element={<Shoes/>}/>
   <Route path='/watch' element={<Watch/>}/>
   <Route path='/phone' element={<Phone/>}/>
   <Route path='/glass' element={<Glass/>}/>
   <Route path='/beauty' element={<Beauty/>}/>
   <Route path='/laptop' element={<Laptop/>}/>
   <Route path='/grocery' element={<Grocery/>}/>
   <Route path='/perfume' element={<Fragrance/>}/>
   <Route path='/furniture' element={<Furniture/>}/>
   <Route path='/cloth' element={<Cloth/>}/>   
   <Route path='/blog' element={<Blog/>}/>   
   <Route path='/cart' element={<Cart/>}/> 
   <Route path='/switchs' element={<Switchs/>}/> 
   <Route path='/details/:id' element={<Details/>}/>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
