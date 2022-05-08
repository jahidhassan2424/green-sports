import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './Pages/Header/Header';

import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './Shared/Header/Header';
import ManageItem from './Pages/ManageItem/ManageItem';
import MyItem from './Pages/MyItem/MyItem';
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';

import Home from './Pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer';
import NotFound from './Shared/NotFound/NotFound';
import ManageItems from './Pages/ManageItems/ManageItems';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        {/* <Route path='/blogs' element={<Blogs></Blogs>}></Route> */}

        <Route path='/manageItems' element={
          <RequiredAuth>
            <ManageItems></ManageItems>
          </RequiredAuth>
        }></Route>

        <Route path='/manageItem/:id' element={
          <RequiredAuth>
            <ManageItem></ManageItem>
          </RequiredAuth>
        }></Route>

        <Route path='/myItem' element={
          <RequiredAuth>
            <MyItem></MyItem>
          </RequiredAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes >
      <Footer></Footer>

    </div>
  )
}

export default App;
