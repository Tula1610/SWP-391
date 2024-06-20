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
import { Provider, useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';
import ExerciseSpaShop from './components/services/ExerciseSpaShop';
import UserProfile from './components/template/UserProfile';
import Washing from './components/details/Washing';
import SpinnerLoader from './components/SprinnerLoader/SpinnerLoader';
import OTPVerification from './components/template/OTPVerification';
import {store} from './store/store'
import ForgotPassword from './components/template/ForgotPassword';

function App() {
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
  const [spinnerLoader, setSpinnerLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpinnerLoader(false);
    }, 2000)
  }, [])
  return (
     <BrowserRouter>
     <div>
     {
          spinnerLoader ? (< SpinnerLoader />) : (
            <>
              <Context.Provider value={{
                    fetchUserDetails // user detail fetch 
              }}>
                <ToastContainer/>
                <Header/>
                    <Provider store = {store}>
                        <Routes>
                          <Route path="/" element={<Home />}/>
                          <Route path="/login" element={store ?  <Login /> : <Navigate to="/login"/>}/>
                          {/* <Route path="/booking" element={store ? <Navigate to ="/login"/> : <Booking/> } /> */}
                          <Route path="/booking" element={store ? <Booking/> : <Navigate to ="/login"/> } />
                          <Route path="/changepassword" element={<ChangePassword/> } />
                          <Route path="/serviceslist" element={<ExerciseSpaShop/> } />
                          <Route path="/userprofile" element={<UserProfile/>}/>
                          <Route path="/washingservice" element={<Washing/>}/>
                          <Route path="/otpverificate" element={<OTPVerification/>}/>
                          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
                        </Routes>
                    </Provider>   
                <Footer/>
              </Context.Provider>
      </>
        )
      }
      </div>
    </BrowserRouter>
  );
}
export default App;
