import React from 'react'
import { Redirect } from 'react-router-dom'

import Home from './components/Home'
 import { defaultLocale } from './config/i18n'
 import { localizeRoutes } from './services/i18n/util'

const routes = [
    {
        path: "/",
        exact: true,
        localize: false,
        component: () => <Redirect to={`/${defaultLocale}`} />
    },
 
    {
        path: "/",
        component: Home
    }
]

export default localizeRoutes(routes)