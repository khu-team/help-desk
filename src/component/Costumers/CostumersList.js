
import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./navbar";
import ShowList from "./ShowList";
import Addcustomer from "./Add customer"
import editcustomer from '../Edit/EditCostumer'
import showcustomer from"./show customer"
class CostumersList extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/costumers"   component={showcustomer}/>
                    <Route path="/addcustomer" component={Addcustomer}/>
                    <Route path="/editcustomer" component={editcustomer}/>
                    <Route path="/showcustomer" component={ShowList}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default CostumersList;