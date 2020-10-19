import React from 'react'

import Intro from '../containers/intro'
import Team from '../containers/Team'
import Activities from '../components/activities'
import ContactPage from '../components/contactUs'
import ActivityList from '../containers/ActivityList'

export default () => (
    <div>
                <Intro />

        <ActivityList />

        <Activities />

        <Team />
        <ContactPage />
    </div>
)
