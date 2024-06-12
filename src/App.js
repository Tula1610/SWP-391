import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ManageStaff from './components/ManageStaff/ManageStaff';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/manageStaff' element={<ManageStaff />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
