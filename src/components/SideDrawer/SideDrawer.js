import React from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
        <Link to="/"><button type = "button">IT GUILD</button></Link>
        </li>
        <li>
          <Link to="/documents"><button type = "button">Documents</button></Link>
        </li>
        <li>
          <Link to="/events"><button type = "Events">Manifesto</button></Link>
        </li>
        <li>
          <Link to="/contacts"><button type = "button">Contacts</button></Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
