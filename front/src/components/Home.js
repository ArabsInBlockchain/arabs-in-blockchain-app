import React from 'react'

import CoverPhoto from '../containers/coverPhoto'
import Team from '../containers/Team'
import Activities from '../components/activities'
import ContactPage from '../components/contactUs'
import ActivityList from '../containers/ActivityList'

export default () => (
    <div>
                <CoverPhoto />

        <ActivityList />

        <Activities />

        <Team />
        <ContactPage />
    </div>
)
