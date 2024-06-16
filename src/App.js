import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ManageStaff from './components/ManageStaff/ManageStaff';
import AddStaff from './components/AddStaff/AddStaff';
import UpdateStaff from './components/UpdateStaff/UpdateStaff';
import SpinnerLoader from './components/SpinnerLoader/SpinnerLoader.js';
import { useEffect, useState } from 'react';
import {  Toaster } from 'react-hot-toast';
import ManageService from './components/ManageService/ManageService.js';


function App() {
  const [spinnerLoader, setSpinnerLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpinnerLoader(false);
    }, 2000)
  }, [])
  

  return (
    <>
      <div className='app' >
        {
          spinnerLoader ? (< SpinnerLoader />) : (
            <>
              <Toaster position='bottom-right' />
              < Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/manageStaff' element={<ManageStaff />} />
                <Route path='/addStaff' element={<AddStaff />} />
                <Route path='/update' element={<UpdateStaff />} />
                <Route path='/manageService' element={<ManageService />} />
              </Routes>
              <Footer />
            </>
          )
        }
      </div>
    </>
  );
}

export default App;
