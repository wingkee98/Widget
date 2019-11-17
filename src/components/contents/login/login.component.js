import React, {Component} from 'react';

class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({ [name] : value }); 
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log('submit');
        window.location = '/widget';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange} 
                    />
                    <br/>
                    <label>
                        <label>Password: </label>
                        <input 
                            type="password"
                            name="password"
                            checked={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br/><br/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default LoginComponent;