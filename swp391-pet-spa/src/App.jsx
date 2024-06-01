import './App.css';
import Login from './components/template/Login';
import Home from "./components/template/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/layouts/Header';
import Booking from './components/template/Booking';
import { useEffect, useState } from "react";
import Footer from './components/layouts/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChangePassword from './components/template/ChangPassWord';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

function App() {
  const [user] = useState(null);
  const dispatch = useDispatch()
  const fetchUserDetails = async()=>{
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials : 'include'
    })

    const dataApi = await dataResponse.json()
    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }
  }

  useEffect(()=>{
    /**user Details */
    fetchUserDetails()
  },[])
  return (
     <BrowserRouter>
     <div>
    <Context.Provider value={{
          fetchUserDetails // user detail fetch 
     }}>
      <ToastContainer/>

      <Header user ={user}/>
      
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login />}/>
        <Route path="/booking" element={user ? <Navigate to ="/booking"/> : <Booking/> } />
        {/* <Route path="/booking" element={user ? <Booking/> : <Navigate to ="/login"/> } /> */}
        <Route path="/changepassword" element={user ? <Navigate to ="/changepassword"/> : <ChangePassword/> } />
       </Routes>   
      <Footer/>
      </Context.Provider>
      </div>
    </BrowserRouter>
  );
}
export default App;
