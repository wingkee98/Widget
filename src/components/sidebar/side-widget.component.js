import React from 'react';

import './side-widget.component.scss';

class SideWidgetComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="side-widget">
                    <div>
                        widget {this.props.widget.id}
                    </div>
                    <div>
                        price
                    </div>
                    <div>
                        {this.props.widget.price}
                    </div>
                </div>
            </div>
        )
    }
}

export default SideWidgetComponent;