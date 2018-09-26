import React, { Component } from 'react';

import Button from '../button';

import RequestsBoxes from './requestsBoxes';
import Requests from './requests';

class RequestsGrid extends Component {

    handleAddRequest = () => {
        this.props.history.push('/request/new')
    }

    render() {
        return (
            <div className="requests-grid">
                <Button className="requests-grid__button" callback={() => this.handleAddRequest()} icon="fas fa-plus"/>
                <RequestsBoxes/>
                <Requests/>
            </div>
        )
    }
}

export default RequestsGrid;