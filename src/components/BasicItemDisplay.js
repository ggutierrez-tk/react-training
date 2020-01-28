import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/ItemDisplay.css'
export default ({target,id,name}) => {
    return (
        <div className="ItemDisplay">
            <Link to={`/${target}/${id}`}>{name}</Link>
        </div>
    )
}