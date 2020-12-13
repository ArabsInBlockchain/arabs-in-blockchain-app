import React,{Suspense} from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
// import "./assets/css/bootstrap-rtl.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
 import 'mdbreact/dist/css/mdb.css';
// import "typeface-poppins";
import "./i18n";
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

// import i18n (needs to be bundled ;))
import './i18n';
const store = configureStore();

const Loader = () => (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div>loading...</div>
    </div>
  );
ReactDOM.render(
    <Provider store={store}>
    <Suspense fallback={<Loader />}>
<App />
</Suspense>
</Provider>, document.getElementById('root'));
