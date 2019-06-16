import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";
import SupportTeamList from "./component/SupportTeam/SupportTeamList";
import ProductsList from "./component/Products/ProductsList";
import TicketsList from "./component/Tickets/TicketsList";
import AddProduct from "./component/Products/AddProduct";
import AddTicket from "./component/Tickets/AddTicket";
import mainpagecustomer from './component/Costumers/mainpage';
// import { Provider } from 'react-redux';
// import { configStore } from 'store';
// const store = configStore();
class App extends React.Component {


    render() {
        return (
            <div>
                {/* <Provider store={store}> */}
                    <BrowserRouter>
                        <Navbar />
                        <Switch>
                            <Route path="/" exact={true} component={Dashboard} />
                            <Route path="/support-team" component={SupportTeamList} />
                            <Route path="/costumers" component={mainpagecustomer} />
                            <Route path="/products" component={ProductsList} />
                            <Route path="/add-product" component={AddProduct} />
                            <Route path="/tickets" component={TicketsList} />
                            <Route path="/add-ticket" component={AddTicket} />
                        </Switch>
                    </BrowserRouter>
                {/* </Provider> */}
            </div>

        );
    }
}

export default App;