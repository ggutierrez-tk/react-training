import React, {useContext} from 'react';
import {SessionContext} from '../../contexts/SessionContext'

export default () => {
    const {setToken} = useContext(SessionContext);
    setToken("");
    return(
        <div/>
    )
}

