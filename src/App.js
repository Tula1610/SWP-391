import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SpinnerLoader from './components/SpinnerLoader/SpinnerLoader.js';
import { lazy, useEffect, useState } from 'react';
import {  Toaster } from 'react-hot-toast';
import BookingSpa from './components/BookingSpa/BookingSpa.js';

//const Home = lazy(() => delayfo)

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
                <Route path='/bookingSpa' element={<BookingSpa/>} />
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
