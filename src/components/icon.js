import React from 'react';

function Icon({className, icon, callback}) {
    return (
        <a onClick={callback} className={className}>
            <i className={icon}/>
        </a>
    )
}

export default Icon;