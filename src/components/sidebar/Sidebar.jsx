import "./sidebar.css"
import {
  MdLineStyle, MdOutlineTimeline, MdOutlineTrendingUp, MdOutlinePermIdentity,
  MdLocalGroceryStore, MdOutlineDynamicFeed, MdMailOutline, MdOutlineMessage, MdOutlineWork, MdReport
} from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdLineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <MdOutlineTimeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdOutlineTrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="linkToSlidebar">
            <li className="sidebarListItem">
              <MdOutlinePermIdentity className="sidebarIcon" />
              Users
            </li>
            </Link>
            <li className="sidebarListItem">
              <MdLocalGroceryStore className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <FaMoneyBillWave className="sidebarIcon" />
              Transactions
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdMailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <MdOutlineDynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MdOutlineMessage className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staffs</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdOutlineWork className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <MdOutlineTimeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdReport className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}
