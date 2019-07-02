import React from 'react';
import MyNav from "../MyNav";

const Navbar = () => (
    <div className="navbar center-text">
    <MyNav address="/showcustomer"/>
    <MyNav address="/addcustomer" />
    <MyNav address="/editcustomer" />
       
    </div>
);

export default Navbar;