import React from 'react';

import './sidebar.component.scss';
import SideWidgetComponent from './side-widget.component';
import AppService from './../../app.service';
import App from '../../App';

class AppSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.getWidgetData = this.getWidgetData.bind(this);
    }

    getWidgetData(value) {
        AppService.setSelectedWidgetId(value);
        console.log('thie price is ' + AppService.getSelectedWidget(value).price);
    }

    render() {
        return (
            <div className="sidebar-container">
                {this.props.widgetData.map(widget => {
                    return <SideWidgetComponent key={widget.id} widget={widget} sendData={this.getWidgetData} />
                })}
            </div>
        )
        
    }
}

export default AppSidebar;