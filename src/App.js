import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import AppNavbar from './components/AppNavbar';
import AppFooter from './components/AppFooter';
import './App.css'
class App extends Component {



  render() {


 
    return (
      <div id='videobackground'>
         <AppNavbar />
              <Router>
        
          {/* routes go here  */}
         
          {/* routes go here */}
          <Routes />
          {/* footer here  */}
         
      </Router>
      <AppFooter />
      </div>

    );
  }
}

export default App;
