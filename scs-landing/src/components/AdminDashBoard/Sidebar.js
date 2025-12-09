import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../../Styles/Sidebar.css"
import { IoMdDocument } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import {
  FaHome,
 
} from "react-icons/fa";



function Sidebar() {
  
  const navigate = useNavigate();

  const [openMenus, setOpenMenus] = useState({});
  
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className={`admin-sidebar ${isCollapsed ? "collapsed" : ""}`}>
     
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
            to="/dashboard/"

            end
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <FaWhatsappSquare   className="admin-icon" />
            <span className="admin-menu-item2">Get In Touch</span>
          </NavLink>
        </li>

        <li>
 

          <NavLink
            to="/dashboard/Onboardingview"

            end
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <IoMdDocument  className="admin-icon" />
            <span className="admin-menu-item2">On boarding</span>
          </NavLink>
        </li>

              </ul>

    </div>
  );
}

export default Sidebar;
