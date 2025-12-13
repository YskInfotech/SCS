import React, { useState, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../../Styles/Sidebar.css"
import { IoMdDocument } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import {
  FaHome, FaLock, FaUser,FaBars,

} from "react-icons/fa";
import profilePic from "../../assets/HRlead.jpg";




function Sidebar() {

  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);


  const [openMenus, setOpenMenus] = useState({});

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const handleLogout = () => {

    localStorage.clear();


    navigate("/");


    setDropdownOpen(false);
  };

  return (
    <>
    <div className={`admin-sidebar ${isCollapsed ? "collapsed" : ""}`}>
    <div className="admin-sidebar-header">
        
        <button
          className="admin-toggle-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <FaBars />
        </button>

        <NavLink
          to="/dashboard"
          end
        >
          
        </NavLink>
      </div>
      <div className="admin-profile-side">
      <img
        src={profilePic}
        alt="Profile"
        className="adminnav-profile-img"
      />
      <h5 className="amin-name-side">ADMIN</h5>
      </div>

      <ul className="admin-sidebar-menu">
        <li>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <FaHome className="admin-icon" />
            <span className="admin-menu-item2">Home</span>
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/dashboard/Getintouch"

            end
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <RiContactsFill className="admin-icon" />
            <span className="admin-menu-item2">Get In Touch</span>
          </NavLink>
        </li>

        <li>


          <NavLink
            to="/dashboard/Onboarddetails"

            end
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <IoMdDocument className="admin-icon" />
            <span className="admin-menu-item2">On boarding</span>
          </NavLink>
        </li>

      </ul>

      <div className="adminnav-right">

        {/* <FaCog className="adminnav-right-icon" /> */}
        <div className="adminnav-profile" ref={dropdownRef}>
          <div className="profile-log-out"> 
         <h5 onClick={toggleDropdown}> <IoMdSettings /> Settings</h5>
         </div>
          {dropdownOpen && (
            <div className="adminnav-dropdown">
              <button className="adminnav-dropdown-item">
                <FaUser className="adminnav-dropdown-icon" /> My Profile
              </button>
              <button className="adminnav-dropdown-item">
                <FaLock className="adminnav-dropdown-icon" /> Change Password
              </button>

              <button
                className="adminnav-dropdown-item adminnav-logout"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="adminnav-dropdown-icon" /> Log Out
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
    </>
  );
}

export default Sidebar;
