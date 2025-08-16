import { FiSearch } from "react-icons/fi";
import "../styles/Navbar.css";
import { FaBars, FaRegUser } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    "Dashboard",
    "Financials",
    "Lease & Tenant Management",
    "Maintenance & Inspections",
    "AI & Analytics",
    "Properties",
    "Compliance & Legal",
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => setIsOpen(false);

  const [activeTab, setActiveTab] = useState("Properties");

  return (
    <div className="app_navbar">
      <div className="nav_header">
        <img src="/src/assets/logo.png" alt="logo" className="app_logo" />
        <div className="menu_icon" onClick={toggleNavbar}>
          {isOpen ? (
            <FaTimes size={22} color="#000" />
          ) : (
            <FaBars size={22} color="#000" />
          )}
        </div>
      </div>

      {isOpen && <div className="overlay" onClick={closeNavbar}></div>}

      <div className={`nav_container ${isOpen ? "open" : ""}`}>
        <div className="nav_list">
          <div className="close_icon" onClick={closeNavbar}>
            <FaTimes size={22} color="#000" />
          </div>

          {navItems.map((item, index) => (
            <div
              key={index}
              className={`nav_item ${activeTab === item ? "active" : ""}`}
              onClick={() => {
                setActiveTab(item);
                setIsOpen(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="nav_search">
          <input type="text" placeholder="Search" className="search_input" />
          <FiSearch color="#bcbcbc" />
        </div>
        <div className="nav_btns">
          <button className="nav_btn">
            <IoNotificationsOutline size={20} />
          </button>
          <button className="nav_btn">
            <FaRegUser size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
