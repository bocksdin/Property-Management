import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

class RequestsItem extends Component {
    render() {
        return (
            <div className="requests-item">
                <Icon className="requests-item__icon" icon="fas fa-exclamation-triangle"/>
                <div className="requests-item__title">
                    My door fell down
                </div>
                <div className="requests-item__tenant-unit">
                    Rory - Unit 115
                </div>
                <Icon className="requests-item__arrow" icon="fas fa-sort-down"/>
                <div className="requests-item__date">
                    01/31/1990
                </div>
                <Button className="requests-item__move" callback={() => console.log('clicked')} icon="fas fa-wrench"/>
            </div>
        )
    }
}

export default RequestsItem;