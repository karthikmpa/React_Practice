import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavigation = () => {
    return(
        <div>
            <nav className="sidebar">
                <ul>
                    <li>
                        <NavLink to="/main/dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={{
                            pathname: '/main/about'
                        }}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/main/team">Team Members</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideNavigation;