import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './supportTeam.css';
import './tickets.css';
import './products.css';
import './costumers.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

const jsx = (
    <div>
        <App/>
    </div>
);


ReactDOM.render(jsx, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
