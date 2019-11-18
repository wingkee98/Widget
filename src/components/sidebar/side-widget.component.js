import React from 'react';

import './side-widget.component.scss';

class SideWidgetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.sendData = this.sendData.bind(this);
    }

    sendData() {
        this.props.sendData(this.props.widget.id);
        window.location = '/widget/:' + this.props.widget.id;
    }
    render() {
        return (
            <div >
                <div className="side-widget" onClick={this.sendData}>
                    <div className="side-widget-item-container side-widget-id">
                        {this.props.widget.id}
                    </div>
                    <div className="side-widget-item-container">
                        <span>price</span><span className="widget-arrow">&gt;</span>
                    </div>
                    <div className="side-widget-item-container side-widget-price">
                        ${this.props.widget.price}
                    </div>
                </div>
            </div>
        )
    }
}

export default SideWidgetComponent;