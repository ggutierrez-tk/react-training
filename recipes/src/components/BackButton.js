import React from 'react'
import {useHistory} from 'react-router-dom'

export default () => {
    const history = useHistory();
    return <button onClick={history.goBack}>Atras</button>
}