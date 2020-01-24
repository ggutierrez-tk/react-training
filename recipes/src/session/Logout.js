import React, {useContext} from 'react';
import {SessionContext} from '../contexts/SessionContext'
function Logout(){
    const {setToken} = useContext(SessionContext);
    setToken("");
    return(
        <div/>
    )
}

export default Logout;