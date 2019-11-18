import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
import './App.scss';
import AppHeader from './components/header/header.component';
import AppSearch from './components/search/search.component';
import AppSidebar from './components/sidebar/sidebar.component';
import AppContent from './components/contents/contents.component';
import AppService from './app.service';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widgetData: AppService.widgetData
    }
    this.searchChange = this.searchChange.bind(this);
  }

  searchChange(val) {
    console.log('search change ' + val);
    this.setState({ widgetData: AppService.searchWidgetData(val) });
  }

  render() {
    return (
      <Router>
        <div className="grid-container grid-container-login">
          <div className="app-container app-header">
            <AppHeader />
          </div>
          <div className="app-container app-search">
            <AppSearch searchChange={this.searchChange} />
          </div>
          <div className="app-container app-sidebar">
            <AppSidebar widgetData={this.state.widgetData} />
          </div>
          <div className="app-container app-content">
            <AppContent />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
