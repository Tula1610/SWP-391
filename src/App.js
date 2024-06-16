import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SpinnerLoader from './components/SpinnerLoader/SpinnerLoader.js';
import { useEffect, useState } from 'react';
import {  Toaster } from 'react-hot-toast';
import ManageService from './components/ManageService/ManageService.js';
import AddService from './components/AddService/AddService.js';
import UpdateService from './components/UpdateService/UpdateService.js';


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
              <Toaster position='top-right' />
              < Header />
              <Routes>
              <Route path='/' element={<Home />} />
                <Route path='/manageService' element={<ManageService />} />
                <Route path='/addService' element={<AddService />} />
                <Route path='/updateService' element={<UpdateService />} />
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
