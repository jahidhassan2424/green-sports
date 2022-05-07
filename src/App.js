import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './Shared/Header/Header';
import ManageItem from './Pages/ManageItem/ManageItem';
import MyItem from './Pages/MyItem/MyItem';
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';
import NotFound from './Pages/NotFound/NotFound';

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
        <Route path='/manageItem' element={
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

    </div>
  )
}

export default App;
