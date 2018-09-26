import React, { Component } from 'react';
import RequestsBox from './requestsBox';

class RequestsBoxes extends Component {
    render() {
        return (
            <div className="requests-boxes">
                <RequestsBox title={'pending'} count={2}/>
                <RequestsBox title={'in-progress'} count={1}/>
                <RequestsBox title={'complete'} count={0}/>
            </div>
        )
    }
}

export default RequestsBoxes;