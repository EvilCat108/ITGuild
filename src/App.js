import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Homepage from './components/Pages/homePage';
import Events from './components/Pages/events';
import Documents from './components/Pages/documents';
import Contacts from './components/Pages/contacts';
import Footer from './components/Pages/footer';

import './Assets/css/default.css';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <Router>
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '120px'}}>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/documents' component={Documents} />
        <Route exact path='/events' component={Events} />
        <Route exact path='/contacts' component={Contacts} />



        <Footer />
    
        </main>

      </div>
      </Router>
    );
  }
}

export default App;
