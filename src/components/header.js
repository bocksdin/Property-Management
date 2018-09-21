import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>Welcome to HOA Manager!</h1>
                <p>Please login to continue</p>
                {this.props.children}
            </div>
        )
    }
}

export default Header;