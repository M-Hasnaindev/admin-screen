import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaUserCircle
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Input",
            icon:<FaTh/>
        },
        {
            path:"/select",
            name:"Select",
            icon:<FaUserAlt/>
        },
        {
            path:"/buttons",
            name:"Button",
            icon:<FaRegChartBar/>
        },
        {
            path:"/iconbutton",
            name:"Icon Button",
            icon:<FaCommentAlt/>
        },
        {
            path:"/table",
            name:"Table",
            icon:<FaShoppingBag/>
        },
        {
            path:"/switch",
            name:"Switch",
            icon:<FaThList/>
        },
        {
            path:"/datepicker",
            name:"Date Picker",
            icon:<FaThList/>
        },
        {
            path:"/register/auth",
            name:"Register Now",
            icon:<FaUserCircle/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;