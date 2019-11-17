import React from 'react';

import './sidebar.component.scss';
import SideWidgetComponent from './side-widget.component';

class AppSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            widgets : [
                {
                    id: 1,
                    price: 750
                },
                {
                    id: 2,
                    price: 240
                },
                {
                    id: 3,
                    price: 500
                },
                {
                    id: 4,
                    price: 900
                },
                {
                    id: 5,
                    price: 800
                }
            ]
        }
    }
    render() {
        return this.state.widgets.map(widget => {
            return <SideWidgetComponent key={widget.id} widget={widget} />
        })
    }
}

export default AppSidebar;