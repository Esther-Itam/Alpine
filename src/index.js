import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';


import store from "./store/index.js";

import App from './App';

ReactDOM.render( <Provider store={store}>

    <App/>

   </Provider>, document.getElementById("root")
);