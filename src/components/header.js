import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1 className="header__title">Welcome to HOA Manager!</h1>
                <p className="header__subtitle">Please login to continue</p>
                {this.props.children}
            </div>
        )
    }
}

export default Header;