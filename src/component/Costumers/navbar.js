import React from 'react';
import MyNav from "../MyNav";

const Navbar = () => (
    <div className="">
    <MyNav address="/showcustomer" label="نمایش لیست مشتری"/>
        <MyNav address="/addcustomer" label="افزودن"/>
        <MyNav address="/editcustomer" label="ویرایش"/>
        
        
    </div>
);

export default Navbar;