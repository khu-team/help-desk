import React from 'react';
import MyNav from "./MyNav";

const Navbar = () => (
    <div className="row">
        <div className="col-12">
            <div className="right-dir my-navbar">
                <MyNav address="/" isExact={true} label="داشبورد"/>
                <MyNav address="/support-team" label="تیم پشتیبانی"/>
                <MyNav address="/costumers" label="مشتریان"/>
                <MyNav address="/products" label="محصولات"/>
                <MyNav address="/add-product" label="افزودن محصول"/>
                <MyNav address="/tickets" label="تیکت ها"/>
                <MyNav address="/add-ticket" label="افزودن تیکت"/>
                <img alt="help-desk" src="/assets/logo.png" className="navbar-logo"/>
            </div>
        </div>
    </div>
);

export default Navbar;