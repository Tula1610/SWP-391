import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SpinnerLoader from './components/SpinnerLoader/SpinnerLoader.js';
import { lazy, useEffect, useState } from 'react';
import {  Toaster } from 'react-hot-toast';
import BookingSpa from './components/BookingSpa/BookingSpa.js';
import ManageStaff from './components/ManageStaff/ManageStaff.js';
import AddStaff from './components/AddStaff/AddStaff.js';
import UpdateStaff from './components/UpdateStaff/UpdateStaff.js';
import ManageService from './components/ManageService/ManageService.js';
import AddService from './components/AddService/AddService.js';
import UpdateService from './components/UpdateService/UpdateService.js';
import ManageCombo from './components/ManageCombo/ManageCombo.js';
import AddCombo from './components/AddCombo/AddCombo.js';

//const Home = lazy(() => delay)

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
                <Route path='/manageStaff' element={<ManageStaff/>} />
                <Route path='/addStaff' element={<AddStaff/>} />
                <Route path='/updateStaff' element={<UpdateStaff/> } />

                <Route path='/manageService' element={<ManageService/>} />
                <Route path='/addService' element={<AddService/> } />
                <Route path='/updateService' element={<UpdateService/>  } />

                <Route path='/bookingSpa' element={<BookingSpa/>} />

                <Route path='/manageCombo' element={<ManageCombo/> } />
                <Route path='/addCombo' element={<AddCombo/> } />
              </Routes>
              <Footer />
            </>
          )
        }
      </div>
    </>
  );
}

// function loading(promise) {
//   return new Promise()
// }

export default App;
