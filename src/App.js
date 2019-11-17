import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
import './App.scss';
import AppHeader from './components/header/header.component';
import AppSearch from './components/search/search.component';
import AppSidebar from './components/sidebar/sidebar.component';
import AppContent from './components/contents/contents.component';

function App() {
  return (
    <Router>
      <div className="grid-container grid-container-login">
        <div className="app-container app-header">
          <AppHeader />
        </div>
        <div className="app-container app-search">
          <AppSearch />
        </div>
        <div className="app-container app-sidebar">
          <AppSidebar />
        </div>
        <div className="app-container app-content">
          <AppContent />
        </div>
      </div>
    </Router>
  );
}

export default App;
