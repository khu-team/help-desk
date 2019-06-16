import React from 'react';
import MyNav from "../MyNav";

const Navbar = () => (
    <div className="navbar center-text">
        <hr></hr>
        <br></br>
        <MyNav address="/showcustomer" label="نمایش لیست مشتری"/>
        <MyNav address="/addcustomer" label=" افزودن مشتری"/>
        <MyNav address="/editcustomer" label=" ویرایش اطلاعات مشتریان"/> 
    </div>
);

export default Navbar;