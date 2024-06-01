import { Link } from "react-router-dom";
import SummaryApi from "../../common";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../store/userSlice";

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
  return (
    <div className="navbar-container">
    <div className="navbar">
      <div className="navbar-left">
        <div>
        <Link className="link" to = "/"><img src="Logo.png" alt="LogoPet" /></Link> 
        </div>
        
          <div>
          <Link className="link" to = "/">Home</Link>
          </div>
          <div>
          <Link className="link" to = "/booking">Booking Spa</Link>
            </div>
          <div>Review Combo</div>
          <div>Member</div>
          </div>

          <div className="rightItem">
            <div className="userIcon">
              <img src = "userIcon.png" alt="userIcon" />
            </div>
          </div>
          <div>
            
            <ul classname="navbar-right ">
              <div className="listItem">
              {
              user?._id ? (
                <div onClick={handleLogout}  className="login-button flex items-center gap-4">Logout</div>
              )
              : (
              <Link className="login-button flex items-center gap-4" to ="login">Login</Link>
              )
            }
          
              </div>
            </ul>
        </div>

      </div>
    </div>
        );
    };
export default Header;