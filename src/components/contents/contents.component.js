import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './contents.component.scss';
import LoginComponent from './login/login.component';
import WidgetComponent from './widget/widget.component';

class AppContent extends React.Component {
  constructor(props) {
      super(props);
  }
  
  getDerivedStateFromProps(props, state) {
        console.log(this.props.selectedWidget)
  }

  shouldComponentUpdate() {
    console.log(this.props.selectedWidget);
      return true;
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={['/', '/login']} component={LoginComponent} />
          <Route exact path={["/widget", "/widget/:id"]} component={WidgetComponent} />
        </Switch>
       </div>
    );
  }
}

export default AppContent;