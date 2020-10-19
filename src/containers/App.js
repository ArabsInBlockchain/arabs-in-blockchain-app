import React from 'react'
import { connect } from 'react-redux'
import {
    Route,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom'

import './VideoBackgroundPage.css';

import routes from '../routes'
import Localizer from './Localizer'
import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'
const App = props => (
      <div id='videobackground'>
         <Router>
            <Localizer>
                {props.uiTranslationsLoaded &&
                    <div>
                        <AppNavbar />

                        <div className="">
                            <main id="main" role="main">
                                <Switch>
                                    {routes.map((route, index) => (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            component={route.component}
                                        />
                                    ))}
                                </Switch>
                            </main>
                        </div>

                       
                    </div>
                }
            </Localizer>
        </Router>

   
        <AppFooter />
      </div>
    )
 

    export default connect(
      state => ({ uiTranslationsLoaded: state.l10n.uiTranslationsLoaded })
  )(App)