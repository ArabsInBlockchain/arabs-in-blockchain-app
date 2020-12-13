/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components

import Intro from '../components/intro'
import Team from '../components/Team'
import Activities from '../components/activities'
import ContactPage from '../components/contactUs'
import ActivityList from '../components/ActivityList'
 
// core components

 
function LandingPage() {
 
  return (
    <React.Fragment>
      <Intro />

<ActivityList />

<Activities />

<Team />
<ContactPage />
    </React.Fragment>
  );
}

export default LandingPage;
