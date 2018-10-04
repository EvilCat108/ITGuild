import React from 'react';
import { Link } from 'react-router-dom';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import logo from '../../pictures/logo/itguild.png';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/"><img src={logo} alt="IT GUILD"/></a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><Link to="/"><button type = "button">IT GUILD</button></Link></li>
                <li><Link to="/documents"><button type = "button">Documents</button></Link></li>
                <li><Link to="/events"><button type = "button">Events</button></Link></li>
                <li><Link to="/contacts"><button type = "button">About us</button></Link></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;
