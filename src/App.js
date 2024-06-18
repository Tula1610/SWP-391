import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import "./app.css";
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';

function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/users" exact element={<UserList />}></Route>
          <Route path="/user/:userId" exact element={<User/>}></Route>
        </Routes>


      </div>
    </Router>



    // <div>
    //   <Topbar />
    //   <div className='container'>
    //   <Sidebar />
    //   <UserList/>
    //   </div>
    // </div>

  );
}

export default App;
