import React from 'react';

import './search.component.scss';

class AppSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({ [name] : value }); 
        this.props.searchChange(value);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="search"
                        className="search-input"
                        placeholder="Find the widget of your dreams"
                        value={this.state.search}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}

export default AppSearch;