import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./navbar";
import CostumersList from "./CostumersList";
import Addcustomer from "./Add customer"
import editcustomer from "./edit customer"
import showcustomer from"./show customer"
class Mainpage extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/costumers"   component={showcustomer}/>
                    <Route path="/addcustomer" component={Addcustomer}/>
                    <Route path="/editcustomer" component={editcustomer}/>
                    <Route path="/showcustomer" component={CostumersList}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Mainpage;