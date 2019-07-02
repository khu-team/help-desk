import React from 'react';
import MyNav from "../MyNav";

const Navbar = () => (
    <div className="navbar center-text">
        <hr></hr>
        <br></br>
        <MyNav address="/editcustomer" label=" ویرایش اطلاعات مشتریان"/>
        <MyNav address="/addcustomer" label=" افزودن مشتری"/>
        <MyNav address="/showcustomer" label="نمایش لیست مشتری"/>
    </div>
);

export default Navbar;