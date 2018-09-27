import React from 'react';

function Icon({className, icon}) {
    return (
        <div className={className}>
            <i className={icon}/>
        </div>
    )
}

export default Icon;