import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LandingPage from "./views/LandingPage.js";

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                {/* <Route exact path='/' component={HomePage} /> */}

                <Route exact  path="/" render={(props) => <LandingPage {...props} />} />

               
                <Route
                    render={function () {
                        return <h1>Not Found</h1>;
                    }}
                />
 
                      <Redirect to="/" />

            </Switch>
        );

    }
}

export default Routes;
