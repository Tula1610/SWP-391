import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ManageStaff from './components/ManageStaff/ManageStaff';
import SpinnerLoader from './components/SpinnerLoader/SpinnerLoader.js';
import { useEffect, useState } from 'react';


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
              < Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/manageStaff' element={<ManageStaff />} />
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
