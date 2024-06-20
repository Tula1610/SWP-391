import { Link } from "react-router-dom";
import SummaryApi from "../../common";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../store/userSlice";
import { ImProfile } from "react-icons/im";
import { MdOutlineChangeCircle } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const handleLogout = async() => {
    const fetchData = await fetch(SummaryApi.logout_user.url,{
      method : SummaryApi.logout_user.method,
      credentials : 'include'
    })
    const data = await fetchData.json()
    if(data.success){
      toast.success(data.message)
      dispatch(setUserDetails(null))
    }
    if(data.error){
      toast.error(data.message)
    }
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
    <div className="navbar">
      <div className="navbar-left">
        <Link className="link" to = "/"><img src="Logo.png" alt="LogoPet" /></Link> 
          

          <div class ="wrapper">
            <div class="tabs">
              <input type="radio" name="tabs" checked id="tab1"/>
              <label for="tab1"><Link className="link" to = "/">Home</Link></label>
              <input type="radio" name="tabs" checked id="tab2"/>
              <label for="tab2"><Link className="link" to = "/booking">Booking</Link></label>
              <input type="radio" name="tabs" checked id="tab3"/>
              <label for="tab3"><Link className="link" to = "/serviceslist">Service</Link></label>
              <div class="glider"></div>
            </div>
          </div>
</div> 
          <div className="navbar-right">
          <div className="userIcon" >
              <img src = "userIcon.png" alt="userIcon" />
            <div/>
            <div class="dropdown">
              {
                user?._id ? (
                  <div>
                    <div class="btn username btn-7sm " type="button" data-bs-toggle="dropdown">
                      {user?.name}
                    </div>
                    <ul class="dropdown-menu container-fluid p-0" aria-labelledby="dropdownMenu2">
                      <Link className="profile" to = "/userprofile"><div class="dropdown-item"><ImProfile/> Profile</div></Link>
                      <Link className="profile" to = "/changepassword"><div class="dropdown-item"><MdOutlineChangeCircle/> Password</div></Link>
                      <li><div class="dropdown-item">Something else here</div></li>
                    </ul>
                  </div>
                ) : (
                  <div class='guest'>
                    Guest
                  </div>
                )
              }
            </div>
            </div>
          
            <div>
              
                <div>
                {
                user?._id ? (
                  <div onClick={handleLogout}  className="login-button">Logout</div>
                )
                : (
                  <div><Link className="login-button" to ="login">Login</Link></div>
                )
              }
                </div>
          </div>
        </div>
        <div className="bar_btn" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
      </div>
      <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>

                <li><Link className="link" to = "/" style={{color: 'black'}}>Home</Link></li>
                <li><Link className="link" to = "/booking"style={{color: 'black'}}>Booking</Link></li>
                <li><Link className="link" to = "/serviceslist"style={{color: 'black'}}>Service</Link></li>

              <li>
                <div className="userIcon" >
                    <img src = "userIcon.png" alt="userIcon" />
                  <div/>
                  <div class="dropdown">
                    {
                      user?._id ? (
                        <div>
                          <div class="btn username btn-7sm " style={{color: 'black'}} type="button" data-bs-toggle="dropdown">
                            {user?.name}
                          </div>
                          <ul class="dropdown-menu container-fluid p-0" aria-labelledby="dropdownMenu2" style={{color: 'black'}}>
                            <Link className="profile" to = "/userprofile"><div class="dropdown-item"><ImProfile/> Profile</div></Link>
                            <Link className="profile" to = "/changepassword"><div class="dropdown-item"><MdOutlineChangeCircle/> Password</div></Link>
                            <li><div class="dropdown-item">Something else here</div></li>
                          </ul>
                        </div>
                      ) : (
                        <div class='guest' style={{color: 'black'}}>
                          Guest
                        </div>
                      )
                    }
                  </div>
                  </div>
                
                  <div>
                      <div>
                      {
                      user?._id ? (
                        <div onClick={handleLogout}  className="login-button" style={{color: 'black'}}>Logout</div>
                      )
                      : (
                        <div><Link className="login-button" to ="login" style={{color: 'black'}}>Login</Link></div>
                      )
                    }
                      </div>
                  </div>
                </li>
      </div>
    </div>
        );
    };
export default Header;