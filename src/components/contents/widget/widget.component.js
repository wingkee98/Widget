import React from 'react';

import AppService from './../../../app.service';
import './widget.component.scss';

class WidgetComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seletectedWidget: {
                id: ''
            }
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id || ':widget1';
        let widget = AppService.getSelectedWidget(id.replace(':', ''));

        this.setState( { seletectedWidget: widget});
    }
    render() {
        return (
            <div className="widget-container">
                <h1 className="widget-header">{this.state.seletectedWidget.id}</h1>
                <div className="widget-body"></div>
                <div className="widget-seperator"></div>
                <h3 className="widget-speci">Specifications</h3>
                <div className="widget-speci-val">{this.state.seletectedWidget.dimensions}</div>
                <div className="widget-speci-val">{this.state.seletectedWidget.weight}</div>
                <div className="widget-speci-val">{this.state.seletectedWidget.capacity}</div>
                <div className="widget-speci-text">Dimensions</div>
                <div className="widget-speci-text">Weight</div>
                <div className="widget-speci-text">Capacity</div>
                <div className="widget-seperator"></div>
                <div className="widget-description">{this.state.seletectedWidget.desc}</div>
            </div>
        )
    }
}

export default WidgetComponent;