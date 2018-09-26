import React, { Component } from 'react';
import RequestsItem from './requestsItem';

class Requests extends Component {
    render() {
        return (
            <div className="requests">
                <RequestsItem/>
                <RequestsItem/>
                <RequestsItem/>
                <RequestsItem/>
                <RequestsItem/>
                <RequestsItem/>
            </div>
        )
    }
}

export default Requests;