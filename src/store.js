import {createStore,applyMiddleware} from 'redux';
import reduxLogger from 'redux-logger';
import reducers from './reducers'

let currentStore=null;
const middleware=[];
 middleware.push(reduxLogger());

 export const configStore=(initialState={}) => {
     currentStore= createStore(
         reducers,
         initialState,
         applyMiddleware(...middleware)
     )
     return currentStore;
 }
 export const getStore=()=>currentStore;
