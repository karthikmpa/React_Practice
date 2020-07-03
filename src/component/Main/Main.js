import React from 'react'
import SideNavigation from '../SideNavigation/SideNavigation'

import { Route, Switch} from 'react-router-dom'
import Team from './Team/Team'
import About from './About/About'
import Dashboard from './Dashboard/Dashboard'

const Main = () => {
    return(
        <div>
            <SideNavigation />

            <div className="content">
                <Switch>
                    <Route path="/main/team" component={Team} />
                    <Route path="/main/about" component={About} />
                    <Route path="/main/" component={Dashboard} />
                </Switch>
            </div>
        </div>
    )
}

export default Main;