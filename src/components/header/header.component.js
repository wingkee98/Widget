import React from 'react';
import { NavLink } from 'react-router-dom';

import './../../app.service.js';
import './header.component.scss';
import * as AppService from './../../app.service';

class AppHeader extends React.Component {
  constructor() {
    super();
    //AppService.setLogin(true);
  }
  render() {
    return (
      <div>
        <div className="header-container">
          <div className="header-text">
          <h3>Widget Depot</h3>
          </div>
          <div className="nav-container">
            <ul>
              <li><NavLink className="nav-item" activeClassName="active-link" to="/login">Logout</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AppHeader;